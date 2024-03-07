import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/helpers/featureFlags';

const initialState: UserSchema = {
  isMounted: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
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
