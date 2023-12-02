import { Currencies } from '@/entities/Currency';
import { Countries } from '@/entities/Country';

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
