import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, { rejectWithValue, extra, getState }) => {
  const formData = getProfileData(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>('/profile', formData);
    return response.data;
  } catch (error) {
    console.log(error);

    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
