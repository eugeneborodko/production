import { JsonSettings } from '../model/types/json-settings';
import { User } from '../model/types/user';
import { rtkApi } from '@/shared/api/rtkApi';

interface setJsonSettingsArg {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserDataById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
      }),
    }),
    setJsonSettings: build.mutation<User, setJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
  }),
});

export const getUserByIdQuery = userApi.endpoints.getUserDataById.initiate;
export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
