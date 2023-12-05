import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'addCommentForm/addCommentForArticle',
  async (text, {
    rejectWithValue, extra, getState, dispatch,
  }) => {
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  },
);
