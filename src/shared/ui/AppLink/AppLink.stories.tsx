import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkVariant } from './AppLink';
import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator';

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

export const Light = Template.bind({});
Light.args = {
  children: 'Link',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Link',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

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
