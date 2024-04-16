import { createAsyncThunk } from '@reduxjs/toolkit';
import { URLSearchParamsInit } from 'react-router-dom';
import {
  getArticleFiltersLimit,
  getArticleFiltersOrder,
  getArticleFiltersPage,
  getArticleFiltersSearch,
  getArticleFiltersSort,
  getArticleFiltersType,
} from '../../selectors/getArticleFiltersSelectors';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  ArticleSortField,
  ArticleTypes,
  type Article,
} from '@/entities/Article';

interface FetchArticlesListProps {
  replace?: boolean;
  setSearchParams?: (searchParams: URLSearchParamsInit) => void;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articleFilters/fetchArticlesList',
  async ({ setSearchParams }, { rejectWithValue, extra, getState }) => {
    const order = getArticleFiltersOrder(getState());
    const sort = getArticleFiltersSort(getState());
    const search = getArticleFiltersSearch(getState());
    const page = getArticleFiltersPage(getState());
    const limit = getArticleFiltersLimit(getState());
    const type = getArticleFiltersType(getState());

    try {
      setSearchParams?.({
        sort,
        order,
        search,
        type,
      });

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _order: order,
          _sort: ArticleSortField.VIEWS,
          q: search || '',
          type: type === ArticleTypes.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  },
);
