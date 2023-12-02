import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const {
    firstName, lastName, age, city, username, country, currency,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!firstName || !lastName || !username) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age) || age < 1) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  if (!currency) {
    errors.push(ValidateProfileErrors.INCORRECT_CURRENCY);
  }

  return errors;
};
