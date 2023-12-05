import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../../types/article';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>('articleDetails/fetchArticleById', async (id, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get<Article>(`/articles/${id}`, {
      params: {
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    console.log(error);

    return rejectWithValue('Error');
  }
});
