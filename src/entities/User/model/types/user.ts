export type UserRoles = 'admin' | 'manager' | 'user';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoles[];
}

export interface UserSchema {
  authData?: User;
  isMounted: boolean;
}
