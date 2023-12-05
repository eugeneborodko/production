import { getLoginError } from './getLoginError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'Error',
      },
    };
    expect(getLoginError(state as StateSchema)).toBe('Error');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toBe('');
  });
});
