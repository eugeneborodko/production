import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginModal } from './LoginModal';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpened: true,
};

Primary.decorators = [StoreDecorator({})];
