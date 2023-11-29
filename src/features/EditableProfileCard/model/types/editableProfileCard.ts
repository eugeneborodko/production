import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  validateErrors?: ValidateProfileErrors[];
}
