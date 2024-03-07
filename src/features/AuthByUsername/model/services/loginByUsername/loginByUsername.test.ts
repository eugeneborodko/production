import { loginByUsername, LoginByUsernameProps } from './loginByUsername';
import { setAuthData, User } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
  let user: User;
  let userAuthData: LoginByUsernameProps;

  beforeEach(() => {
    user = {
      username: 'user123',
      id: '1',
      features: {
        isArticleRatingEnabled: true,
        isArticleCommentsEnabled: true,
      },
    };
    userAuthData = {
      username: 'user12345',
      password: 'password12345',
    };
  });

  it('auth successful', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: user,
      }),
    );
    const result = await thunk.callThunk(userAuthData);

    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(user);

    // dispatch is being called first time when we call loginByUsername action
    //  thunkAPI.dispatch(setAuthData(response.data)) - calls dispatch second time
    // return response.data - third call is being made when action is completed and fullfil is returned
  });

  it('auth with error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );
    const result = await thunk.callThunk(userAuthData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error');
  });
});
