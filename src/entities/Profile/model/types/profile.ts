import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';

export interface Profile {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currencies;
  country?: Countries;
  city?: string;
  username?: string;
  avatar?: string;
}
