import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticleFiltersInited } from '../../selectors/getArticleFiltersSelectors';
import {
  setInited,
  setLimit,
  setOrder,
  setSearch,
  setSort,
} from '../../slices/articleFiltersSlice';
import { ArticleSortParams } from '../../types/articleFiltersSchema';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from '@/entities/Article';
import { setArticlesView } from '@/features/SwitchArticlesView';
import { LOCAL_STORAGE_ARTICLES_VIEW } from '@/shared/consts/localStorage';
import { SortOrder } from '@/shared/types/sort';

export const initArticleFilters = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articleFilters/initArticleFilters',
  async (searchParams, { dispatch, getState }) => {
    const inited = getArticleFiltersInited(getState());

    if (!inited) {
      searchParams.forEach((searchParam, key) => {
        switch (key as ArticleSortParams) {
        case 'order':
          dispatch(setOrder(searchParam as SortOrder));
          break;
        case 'sort':
          dispatch(setSort(searchParam as ArticleSortField));
          break;
        case 'search':
          dispatch(setSearch(searchParam));
          break;
        default:
          break;
        }
      });

      const storedView = (localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticleView)
        || 'tile';

      dispatch(setArticlesView(storedView));
      dispatch(setLimit(storedView === 'tile' ? 9 : 4));
      dispatch(fetchArticleList({}));
      dispatch(setInited());
    }
  },
);
