import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { mockProfileData } from 'shared/__mocks__/profileData';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
  it('fetch profile data successful', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: mockProfileData,
      }),
    );
    const result = await thunk.callThunk('1');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(mockProfileData);
  });

  it('fetch profile with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );
    const result = await thunk.callThunk('1');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });
});
