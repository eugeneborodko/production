import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/consts/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, { rejectWithValue, dispatch }) => {
    const userId = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
    );

    if (!userId) {
      return rejectWithValue('No user id');
    }

    try {
      const response = await dispatch(getUserByIdQuery(userId)).unwrap();

      if (!response) {
        throw new Error();
      }

      return response;
    } catch (error) {
      return rejectWithValue('Error');
    }
  },
);
