import { StateSchema } from 'app/providers/StoreProvider';
import { mockProfileData } from 'shared/__mocks__/profileData';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData', () => {
  it('should return form data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        formData: mockProfileData,
      },
    };
    expect(getProfileFormData(state as StateSchema)).toBe(mockProfileData);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFormData(state as StateSchema)).toBe(undefined);
  });
});
