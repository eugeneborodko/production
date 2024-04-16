import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  getArticleFiltersOrder,
  getArticleFiltersSearch,
  getArticleFiltersSort,
  getArticleFiltersType,
} from '../../model/selectors/getArticleFiltersSelectors';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import {
  setOrder,
  setPage,
  setSearch,
  setSort,
  setType,
} from '../../model/slices/articleFiltersSlice';
import { ArticleSortField, ArticleTypes } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/types/sort';

export const useArticleFilters = () => {
  const dispatch = useAppDispatch();

  const type = useSelector(getArticleFiltersType);
  const search = useSelector(getArticleFiltersSearch);
  const sort = useSelector(getArticleFiltersSort);
  const order = useSelector(getArticleFiltersOrder);

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeType = useCallback(
    (newType: ArticleTypes) => () => {
      dispatch(setType(newType));
      dispatch(setPage(1));
      fetchData();
    },

    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(setSearch(newSearch));
      dispatch(setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(setSort(newSort));
      dispatch(setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(setOrder(newOrder));
      dispatch(setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return {
    type,
    search,
    sort,
    order,
    onChangeType,
    onChangeSearch,
    onChangeSort,
    onChangeOrder,
  };
};
