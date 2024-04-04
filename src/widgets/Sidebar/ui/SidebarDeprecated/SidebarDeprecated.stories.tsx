import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SidebarDeprecated } from './SidebarDeprecated';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'widgets/Sidebar',
  component: SidebarDeprecated,
} as ComponentMeta<typeof SidebarDeprecated>;

const Template: ComponentStory<typeof SidebarDeprecated> = (args) => (
  <SidebarDeprecated {...args} />
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
