import { getProfileError } from './getProfileError';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual('Error');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
