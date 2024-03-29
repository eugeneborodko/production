import { JsonSettings } from './json-settings';
import { FeatureFlags } from '@/shared/types/featureFlags';

export type UserRoles = 'admin' | 'manager' | 'user';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoles[];
  features: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;
  isMounted: boolean;
}
