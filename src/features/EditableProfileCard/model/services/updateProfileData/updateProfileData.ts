import { createAsyncThunk } from '@reduxjs/toolkit';
import { ValidateProfileErrors } from '../../consts/consts';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = getProfileFormData(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>(
        `/profile/${formData?.id}`,
        formData,
      );

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  },
);
