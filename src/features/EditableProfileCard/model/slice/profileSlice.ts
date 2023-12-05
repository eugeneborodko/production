import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCard';

import { Profile } from '@/entities/Profile';

const initialState: ProfileSchema = {
  readOnly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  formData: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnlyProfile: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.formData = state.data;
      state.readOnly = true;
      state.validateErrors = undefined;
    },
    saveProfile: (state) => {
      state.data = state.formData;
      state.readOnly = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.formData = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.formData = action.payload;
          state.validateErrors = undefined;
        },
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const {
  setReadOnlyProfile, updateProfile, cancelEdit, saveProfile,
} = profileSlice.actions;
export const { reducer: profileReducer } = profileSlice;
