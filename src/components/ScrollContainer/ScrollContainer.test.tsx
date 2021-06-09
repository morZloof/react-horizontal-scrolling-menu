import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import ScrollContainer, { Props } from './ScrollContainer';

const setup = ({ scrollRef, onScroll }: Props) => {
  return render(
    <ScrollContainer onScroll={onScroll} scrollRef={scrollRef}>
      Child
    </ScrollContainer>
  );
};

describe('ScrollContainer', () => {
  test('classNames', () => {
    const scrollRef: React.Ref<HTMLDivElement> = { current: null };
    const { container } = setup({ scrollRef });

    expect(container.firstChild).toHaveClass(
      'react-horizontal-scrolling-menu--scroll-container'
    );
  });

  test('should render children and use ref', () => {
    const scrollRef: React.Ref<HTMLDivElement> = { current: null };
    const { container, getByText } = setup({ scrollRef });

    expect(scrollRef.current).toEqual(container.firstChild);
    expect(getByText('Child')).toBeTruthy();
  });

  test('should fire onScroll', () => {
    const onScroll = jest.fn();
    const scrollRef: React.Ref<HTMLDivElement> = { current: null };
    const { container } = setup({ onScroll, scrollRef });

    expect(onScroll).toHaveBeenCalledTimes(0);
    act(() => {
      fireEvent.scroll(container.firstChild as Node);
    });

    expect(onScroll).toHaveBeenCalledTimes(1);
  });
});
