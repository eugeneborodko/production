// import { setPage } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticlesSearch } from '../model/selectors/articlesSearchSelectors';
import {
  articlesSearchReducer,
  setSearch,
} from '../model/slice/articlesSearch';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { Card, Input } from '@/shared/ui';

export interface ArticlesSearchProps {
  fetchFiltersData: (...args: any[]) => void;
  setPage: ActionCreatorWithPayload<number, 'articlesPageSlice/setPage'>;
}

const reducers: ReducersList = {
  articlesSearch: articlesSearchReducer,
};

export const ArticlesSearch: FC<ArticlesSearchProps> = ({
  fetchFiltersData,
  setPage,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const search = useSelector(getArticlesSearch);
  useDynamicModuleLoader(reducers);

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(setSearch(newSearch));
      dispatch(setPage(1)); // TODO: review
      fetchFiltersData();
    },
    [dispatch, fetchFiltersData, setPage],
  );

  return (
    <Card fullWidth>
      <Input
        placeholder={t('search')}
        onChange={onChangeSearch}
        value={search}
        fullWidth
      />
    </Card>
  );
};
