import { getProfileData } from './getProfileData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { mockProfileData } from '@/shared/__mocks__/profileData';

describe('getProfileData', () => {
  it('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: mockProfileData,
      },
    };
    expect(getProfileData(state as StateSchema)).toBe(mockProfileData);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
