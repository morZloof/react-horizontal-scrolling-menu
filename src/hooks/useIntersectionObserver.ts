import React from 'react';

import { getNodesFromRefs, observerEntriesToItems } from '../helpers';
import { Item, Refs, visibleItems } from '../types';
import { observerOptions } from '../settings';
import ItemsMap from '../ItemsMap';

interface Props {
  items: ItemsMap;
  itemsChanged: string;
  options: typeof observerOptions;
  refs: Refs;
}

function useIntersection({ items, itemsChanged, refs, options }: Props) {
  const observer: { current?: IntersectionObserver } = React.useRef();

  const [visibleItems, setVisibleItems] = React.useState<visibleItems>([]);

  const throttleTimer: { current: number } = React.useRef(
    +setTimeout(() => void 0, 0)
  );

  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const newItems = observerEntriesToItems(entries, options);
      items.set(newItems);

      global.clearTimeout(throttleTimer.current);
      throttleTimer.current = +setTimeout(
        () =>
          global.requestAnimationFrame(() => {
            setVisibleItems((currentVisible) => {
              const newVisibleItems = items
                .getVisible()
                .map((el: Item) => el[1].key);
              if (
                JSON.stringify(currentVisible) !==
                JSON.stringify(newVisibleItems)
              ) {
                return newVisibleItems;
              }
              return currentVisible;
            });
          }),
        options.throttle
      );
    },
    [items, options]
  );

  React.useLayoutEffect(() => {
    const elements = getNodesFromRefs(refs);
    const observerInstance =
      observer.current || new IntersectionObserver(ioCb, options);
    observer.current = observerInstance;
    elements.forEach((elem) => observerInstance.observe(elem));

    return () => {
      clearTimeout(throttleTimer.current);
      observerInstance.disconnect();
      observer.current = undefined;
    };
  }, [ioCb, itemsChanged, options, refs]);

  return { visibleItems };
}

export default useIntersection;
