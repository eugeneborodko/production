import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/json-settings';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/featureFlags';

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
    logout: (state) => {
      state.authData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload;
        }
      },
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.authData = payload;
        setFeatureFlags(payload.features);
        state.isMounted = true;
      },
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state.isMounted = true;
    });
  },
});

export const { logout, setAuthData } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
