/* eslint-disable react/jsx-indent */
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariants } from '../Button/Button';
import classes from './Tabs.module.scss';

export interface Tab<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: Tab<T>[];
  onTabClick: (tab: T) => void;
  value: string;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  onTabClick,
  value,
}: TabsProps<T>) => (
    <div className={classNames(classes.tabs, {}, [className])}>
      {tabs.map((tab) => {
        const tabVariant = tab.value === value
          ? ButtonVariants.CONTAINED
          : ButtonVariants.OUTLINED;

        return (
          <Button
            variant={tabVariant}
            key={tab.value}
            // @ts-ignore
            onClick={onTabClick(tab.value)}
          >
            {tab.content}
          </Button>
        );
      })}
    </div>
  );
