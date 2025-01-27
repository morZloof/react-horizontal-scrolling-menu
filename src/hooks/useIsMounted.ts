import React from 'react';

function useIsMounted(cb = (): void => void 0): boolean {
  const [mounted, setMounted] = React.useState(false);

  React.useLayoutEffect(() => {
    if (!mounted) {
      setMounted(true);
      cb();
    }
  }, [cb, mounted]);

  return mounted;
}

export default useIsMounted;
