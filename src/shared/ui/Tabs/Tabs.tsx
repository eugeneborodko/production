import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTypes } from 'entities/Article/model/consts/consts';
import { useSelector } from 'react-redux';
import { getArticlesType } from 'features/SwitchArticlesType';
import classes from './Tabs.module.scss';
import { Button, ButtonVariants } from '../Button/Button';

export interface ArticlesTabs {
  value: ArticleTypes;
  content: string;
}

interface TabsProps {
  className?: string;
  tabs: ArticlesTabs[];
  onTabClick: (type: ArticleTypes) => void;
}

export const Tabs: FC<TabsProps> = ({ className, tabs, onTabClick }) => {
  const type = useSelector(getArticlesType);

  return (
    <div className={classNames(classes.tabs, {}, [className])}>
      {tabs.map((tab) => {
        const tabVariant = tab.value === type
          ? ButtonVariants.CONTAINED
          : ButtonVariants.OUTLINED;

        return (
          <Button
            variant={tabVariant}
            key={tab.value}
            // @ts-ignore - use Generics (Select)
            onClick={onTabClick(tab.value)}
          >
            {tab.content}
          </Button>
        );
      })}
    </div>
  );
};
