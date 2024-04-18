/* eslint-disable react/jsx-indent */
import { ReactNode } from 'react';
import { Button } from '../Button';
import { Flex, FlexAlign, FlexDirection } from '../Stack/Flex/Flex';
import { classNames } from '@/shared/lib/classNames/classNames';
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
  direction?: FlexDirection;
  align?: FlexAlign;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  onTabClick,
  value,
  direction = 'row',
  align = 'start',
}: TabsProps<T>) => (
    <Flex
      className={classNames(classes.tabs, {}, [className])}
      direction={direction}
      align={align}
    >
      {tabs.map((tab) => {
        const tabVariant = tab.value === value ? 'outlined' : 'empty';

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
    </Flex>
  );
