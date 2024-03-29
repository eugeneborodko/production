import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginUsername', () => {
  it('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user123',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toBe('user123');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
