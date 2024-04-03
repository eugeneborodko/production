import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkVariant } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: AppLinkVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: AppLinkVariant.SECONDARY,
};
