import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeIconColors } from 'app/providers/ThemeProvider';
import Svg from 'shared/assets/icons/theme.svg';
import { Button, ButtonVariants } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Button',
  variant: ButtonVariants.TEXT,
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'Button',
  variant: ButtonVariants.CONTAINED,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Button',
  variant: ButtonVariants.OUTLINED,
};

export const Icon = Template.bind({});
Icon.args = {
  children: <Svg fill={ThemeIconColors.YELLOW} />,
  variant: ButtonVariants.ICON,
};
