import { Currencies } from 'entities/Currency';
import { Countries } from 'shared/const/common';

export interface Profile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currencies;
  country?: Countries;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
}
