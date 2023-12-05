import { ValidateProfileErrors } from '../../consts/consts';

import { getProfileValidateErrors } from './getProfileValidateErrors';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileValidateErrors', () => {
  it('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileErrors.NO_DATA,
          ValidateProfileErrors.INCORRECT_CURRENCY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileErrors.NO_DATA,
      ValidateProfileErrors.INCORRECT_CURRENCY,
    ]);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
