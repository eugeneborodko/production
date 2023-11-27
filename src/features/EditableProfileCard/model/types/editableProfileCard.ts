import { Profile } from 'entities/Profile';

export interface EditableProfileCardSchema {}

export enum ValidateProfileErrors {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
  INCORRECT_CITY = 'INCORRECT_CITY',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  validateErrors?: ValidateProfileErrors[];
}
