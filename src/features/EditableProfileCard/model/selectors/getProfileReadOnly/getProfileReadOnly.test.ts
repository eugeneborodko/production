import { getProfileReadOnly } from './getProfileReadOnly';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileReadOnly', () => {
  it('should return readOnly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: false,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toBe(false);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadOnly(state as StateSchema)).toBe(undefined);
  });
});
