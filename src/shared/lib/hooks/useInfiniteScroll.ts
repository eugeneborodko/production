import { MutableRefObject, useEffect } from 'react';

export interface useInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  // TODO: use Page component as wrapper instead of viewport
  // wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  triggerRef,
  // wrapperRef,
  callback,
}: useInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    // const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      };

      const intersectionObserverCallback = ([
        entry,
      ]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          callback();
        }
      };

      observer = new IntersectionObserver(
        intersectionObserverCallback,
        options,
      );
      observer.observe(triggerElement);
    }

    return () => {
      observer?.disconnect();
    };
  }, [callback, triggerRef]);
};
