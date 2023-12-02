import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { mockArticle } from '@/shared/__mocks__/articleData';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
  it('fetch article data successful', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: mockArticle,
      }),
    );
    const result = await thunk.callThunk(mockArticle.id);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(mockArticle);
  });

  it('fetch article with error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );
    const result = await thunk.callThunk(mockArticle.id);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });
});
