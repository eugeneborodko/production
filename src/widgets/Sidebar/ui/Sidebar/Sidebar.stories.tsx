import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
];
