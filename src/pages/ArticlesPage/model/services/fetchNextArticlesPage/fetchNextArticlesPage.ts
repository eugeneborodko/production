import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlesHasMore,
  getArticlesPage,
  getArticlesPageIsLoading,
} from '../../selectors/articlesPageSelectors';
import { setPage } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, { dispatch, getState }) => {
  const hasMore = getArticlesHasMore(getState());
  const isLoading = getArticlesPageIsLoading(getState());
  const page = getArticlesPage(getState());

  if (hasMore && !isLoading) {
    dispatch(setPage(page + 1));
    dispatch(fetchArticlesList({}));
  }
});
