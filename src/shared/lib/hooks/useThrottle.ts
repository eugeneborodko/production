import { useCallback, useRef } from 'react';

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const throttleRef = useRef(false); // decides if callback can be called

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
};
