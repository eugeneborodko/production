import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('./../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
  it('should change page', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articleFilters: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalled();
  });

  it('should not change page', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articleFilters: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });

  it('', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articleFilters: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
