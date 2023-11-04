import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, Input, Select } from 'shared/ui';
import { SwitchArticlesView } from 'features/SwitchArticlesView';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticlesView } from 'features/ArticleSort';
import classes from './ArticleFilters.module.scss';
// import {setPageView} from ''
import { setView } from '../../model/slice/articleSortSlice';

interface ArticleFiltersProps {
  className?: string;
}

export const ArticleFilters: FC<ArticleFiltersProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);

  const { t } = useTranslation();

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(setView(view));
    },
    [dispatch],
  );

  return (
    <div // TODO: use experimental search tag instead
      className={classNames(classes.articleFilters, {}, [className])}
      role="search"
    >
      <form className={classes.form}>
        <Select label={t('sort by')} options={[]} />
        <SwitchArticlesView view={view} onViewClick={onChangeView} />
      </form>
      <Card className={classes.search}>
        <Input placeholder={t('search')} />
      </Card>
    </div>
  );
};
