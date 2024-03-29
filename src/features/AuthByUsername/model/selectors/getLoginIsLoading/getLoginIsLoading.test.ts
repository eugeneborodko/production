import { getLoginIsLoading } from './getLoginIsLoading';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginIsLoading', () => {
  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
