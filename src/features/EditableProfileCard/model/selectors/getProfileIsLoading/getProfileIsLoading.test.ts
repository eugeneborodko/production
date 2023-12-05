import { getProfileIsLoading } from './getProfileIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileIsLoading', () => {
  it('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});
