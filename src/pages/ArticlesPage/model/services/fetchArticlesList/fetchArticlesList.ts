import { createAsyncThunk } from '@reduxjs/toolkit';
import { URLSearchParamsInit } from 'react-router-dom';
import {
  getArticlesLimit,
  getArticlesPage,
} from '../../selectors/articlesPageSelectors';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleTypes, type Article } from '@/entities/Article';
import { getArticlesOrder, getArticlesSort } from '@/features/ArticleSort';
import { getArticlesSearch } from '@/features/ArticlesSearch';
import { getArticlesType } from '@/features/SwitchArticlesType';

interface FetchArticlesListProps {
  replace?: boolean;
  setSearchParams?: (searchParams: URLSearchParamsInit) => void;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async ({ setSearchParams }, { rejectWithValue, extra, getState }) => {
    const order = getArticlesOrder(getState());
    const sort = getArticlesSort(getState());
    const search = getArticlesSearch(getState());
    const page = getArticlesPage(getState());
    const limit = getArticlesLimit(getState());
    const type = getArticlesType(getState());

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
          _sort: sort,
          q: search,
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
