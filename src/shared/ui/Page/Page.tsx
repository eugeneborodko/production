import {
  MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Page.module.scss';
import { useInfiniteScroll } from '../../lib/hooks/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(classes.page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
