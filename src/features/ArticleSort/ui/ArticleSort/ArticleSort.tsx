import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getArticlesOrder,
  getArticlesSort,
} from '../../model/selectors/articleSortSelectors';
import { setOrder, setSort } from '../../model/slice/articleSortSlice';
import { ArticleSortField } from '@/entities/Article';
// import { setPage } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { SortOrder } from '@/shared/types/sort';
import { Select } from '@/shared/ui';
import { SelectOptions } from '@/shared/ui/Select';
import classes from './ArticleSort.module.scss';

interface ArticleSortProps {
  className?: string;
  fetchFiltersData: (...args: any[]) => void;
  setPage: ActionCreatorWithPayload<number, 'articlesPageSlice/setPage'>;
}

export const ArticleSort: FC<ArticleSortProps> = ({
  className,
  fetchFiltersData,
  setPage,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles');
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending'),
      },
      {
        value: 'desc',
        content: t('descending'),
      },
    ],
    [t],
  );

  const sortOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED_AT,
        content: t('created at'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('sort title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views'),
      },
    ],
    [t],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(setSort(newSort));
      dispatch(setPage(1)); // To review. Should not import from pages to features
      fetchFiltersData();
    },
    [dispatch, fetchFiltersData, setPage],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(setOrder(newOrder));
      dispatch(setPage(1));
      fetchFiltersData();
    },
    [dispatch, fetchFiltersData, setPage],
  );

  return (
    <div // TODO: use experimental search tag instead
      className={classNames('', {}, [className])}
      role="search"
    >
      <form>
        <Select<ArticleSortField>
          className={classes.sortBy}
          label={t('sort by')}
          options={sortOptions}
          value={sort}
          onChange={onChangeSort}
        />
        <Select<SortOrder>
          label={t('by')}
          options={orderOptions}
          value={order}
          onChange={onChangeOrder}
        />
      </form>
    </div>
  );
};
