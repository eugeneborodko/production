import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  isMounted: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    setUserMounted: (state) => {
      state.isMounted = true;
    },
    logout: (state) => {
      state.authData = undefined;
    },
  },
});

export const { setAuthData, logout, setUserMounted } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
