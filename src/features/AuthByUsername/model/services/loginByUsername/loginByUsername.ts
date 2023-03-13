import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthData, User } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(setAuthData(response.data));

    return response.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue('Error');
  }
});
