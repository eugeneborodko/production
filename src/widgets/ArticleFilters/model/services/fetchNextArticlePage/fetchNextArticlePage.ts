import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticleFiltersHasMore,
  getArticleFiltersIsLoading,
  getArticleFiltersPage,
} from '../../selectors/getArticleFiltersSelectors';
import { setPage } from '../../slices/articleFiltersSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articleFilter/fetchNextArticlePage', async (_, { dispatch, getState }) => {
  const hasMore = getArticleFiltersHasMore(getState());
  const isLoading = getArticleFiltersIsLoading(getState());
  const page = getArticleFiltersPage(getState());

  if (hasMore && !isLoading) {
    dispatch(setPage(page + 1));
    dispatch(fetchArticleList({}));
  }
});
