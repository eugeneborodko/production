import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import { Profile } from 'entities/Profile';

export const mockProfileData: Profile = {
  firstName: 'Alex',
  lastName: 'Thunder',
  age: 28,
  currency: Currencies.EUR,
  country: Countries.GERMANY,
  city: 'Berlin',
  username: 'AlexThunder123',
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU',
};
