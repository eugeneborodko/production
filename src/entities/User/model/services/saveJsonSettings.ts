import { createAsyncThunk } from '@reduxjs/toolkit';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { JsonSettings } from '../types/json-settings';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>(
  'user/saveJsonSettings',
  async (newJsonSettings, { rejectWithValue, dispatch, getState }) => {
    const userId = getUserAuthData(getState())!.id;
    try {
      const response = await dispatch(
        setJsonSettingsMutation({ userId, jsonSettings: newJsonSettings }),
      ).unwrap();

      if (!response.jsonSettings) {
        throw new Error();
      }

      return response.jsonSettings;
    } catch (error) {
      return rejectWithValue('Error');
    }
  },
);
