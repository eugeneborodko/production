import {
  MutableRefObject, ReactNode, memo, useRef, UIEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useInfiniteScroll } from '../../../shared/lib/hooks/useInfiniteScroll';
import { getPageScrollPositionByPath } from '../model/selectors/scroll';
import { setScrollPosition } from '../model/slices/pageSlice';
import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { TestProps } from '@/shared/types/tests';
import classes from './Page.module.scss';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(
  ({
    className,
    children,
    onScrollEnd,
    'data-testid': dataTestId,
  }: PageProps) => {
    const dispatch = useAppDispatch();
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) => getPageScrollPositionByPath(state, pathname));

    const pageClassName = classes.pageRedesigned;

    useInfiniteScroll({
      triggerRef,
      callback: onScrollEnd,
    });

    // TODO: fix saving scroll position for article/id
    useInitialEffect(() => {
      // think about using useLayoutEffect instead and create a copy of useInitialEffect with useLayoutEffect - 58 11:40 comment
      wrapperRef.current.scrollTop = scrollPosition;
    });

    const onPageScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
      dispatch(
        setScrollPosition({
          path: pathname,
          scrollPosition: event.currentTarget.scrollTop,
        }),
      );
    }, 500);

    return (
      <main
        ref={wrapperRef}
        className={classNames(pageClassName, {}, [className])}
        onScroll={onPageScroll}
        data-testid={dataTestId}
      >
        {children}
        {onScrollEnd ? (
          <div className={classes.trigger} ref={triggerRef} />
        ) : null}
      </main>
    );
  },
);
