import { ValidateProfileErrors } from '../consts/consts';

import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  validateErrors?: ValidateProfileErrors[];
}
