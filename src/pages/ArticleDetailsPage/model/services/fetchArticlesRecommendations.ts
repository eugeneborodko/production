import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';

export const fetchArticlesRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articlesDetailsPage/fetchArticlesRecommendations',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
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