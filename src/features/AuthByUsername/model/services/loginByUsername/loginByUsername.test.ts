import axios from 'axios';
import { setAuthData, User } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername, LoginByUsernameProps } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  let user: User;
  let userAuthData: LoginByUsernameProps;

  beforeEach(() => {
    user = {
      username: 'user123',
      id: '1',
    };
    userAuthData = {
      username: 'user12345',
      password: 'password12345',
    };
  });

  it('auth successful', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: user,
      }),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(userAuthData);

    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(user);

    // dispatch is being called first time when we call loginByUsername action
    //  thunkAPI.dispatch(setAuthData(response.data)) - calls dispatch second time
    // return response.data - third call is being made when action is completed and fullfil is returned
  });

  it('auth with error', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(userAuthData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error');
  });
});
