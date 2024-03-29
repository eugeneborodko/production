import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const SignedInUser = Template.bind({});
SignedInUser.args = {};
SignedInUser.decorators = [StoreDecorator({
  user: {
    authData: {},
  },
})];
