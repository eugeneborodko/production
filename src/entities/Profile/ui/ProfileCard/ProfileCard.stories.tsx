import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currencies } from '@/entities/Currency';
import { Countries } from '@/entities/Country';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Editable = Template.bind({});
Editable.args = {
  data: {
    firstName: 'Alex',
    lastName: 'Thunder',
    age: 28,
    currency: Currencies.EUR,
    country: Countries.GERMANY,
    city: 'Berlin',
    username: 'AlexThunder123',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU',
  },
};
Editable.decorators = [
  StoreDecorator({
    profile: {},
  }),
];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  data: {
    firstName: 'Alex',
    lastName: 'Thunder',
    age: 28,
    currency: Currencies.EUR,
    country: Countries.GERMANY,
    city: 'Berlin',
    username: 'AlexThunder123',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU',
  },
};
ReadOnly.decorators = [
  StoreDecorator({
    profile: {
      readOnly: true,
    },
  }),
];

export const WithError = Template.bind({});
WithError.args = {
  error: 'Error',
};
WithError.decorators = [
  StoreDecorator({
    profile: {
      readOnly: true,
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [
  StoreDecorator({
    profile: {
      readOnly: true,
    },
  }),
];
