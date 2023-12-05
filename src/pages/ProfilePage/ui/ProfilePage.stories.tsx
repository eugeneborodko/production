import { Story, ComponentMeta } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: Story<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    formData: {
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
  },
})];
