import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { setAuthData, User } from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/consts/localStorage';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async ({ username, password }, { dispatch, rejectWithValue, extra }) => {
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        LOCAL_STORAGE_USER_KEY,
        JSON.stringify(response.data),
      );
      dispatch(setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue('Error');
    }
  },
);
