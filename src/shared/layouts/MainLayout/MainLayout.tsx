import { FC, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar?: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = ({
  className,
  content,
  header,
  sidebar,
  toolbar,
}: MainLayoutProps) => (
  <div className={classNames(classes.mainLayout, {}, [className])}>
    <div className={classes.sidebar}>{sidebar}</div>
    <div className={classes.content}>{content}</div>
    <div className={classes.rightbar}>
      <header className={classes.header}>{header}</header>
      <div className={classes.toolbar}>{toolbar}</div>
    </div>
  </div>
);
