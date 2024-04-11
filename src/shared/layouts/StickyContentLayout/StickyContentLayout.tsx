import { FC, ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = memo(
  ({
    className, left, content, right,
  }: StickyContentLayoutProps) => (
    <div className={classNames(classes.stickyContentLayout, {}, [className])}>
      {left && <div className={classes.left}>{left}</div>}
      <div>{content}</div>
      {right && <div className={classes.right}>{right}</div>}
    </div>
  ),
);
