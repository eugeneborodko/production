import { User } from '../../../User/index';

export interface Comment {
  id: string;
  user: User;
  text: string;
}
