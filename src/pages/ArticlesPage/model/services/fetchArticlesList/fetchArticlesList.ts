import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';
import {
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort,
} from 'features/ArticleSort';
import {
  getArticlesLimit,
  getArticlesPage,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, { rejectWithValue, extra, getState }) => {
    const order = getArticlesOrder(getState());
    const sort = getArticlesSort(getState());
    const search = getArticlesSearch(getState());
    const page = getArticlesPage(getState());
    const limit = getArticlesLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _order: order,
          _sort: sort,
          q: search,
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
