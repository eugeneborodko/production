import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeIconColors } from 'app/providers/ThemeProvider';
import Svg from 'shared/assets/icons/theme.svg';
import { Button, ButtonSizes, ButtonVariants } from './Button';

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

export const OutlinedInverted = Template.bind({});
OutlinedInverted.args = {
  children: 'Button',
  variant: ButtonVariants.OUTLINED_INVERTED,
};

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
  children: 'Button',
  variant: ButtonVariants.OUTLINED,
  size: ButtonSizes.M,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
  children: 'Button',
  variant: ButtonVariants.OUTLINED,
  size: ButtonSizes.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
  children: 'Button',
  variant: ButtonVariants.OUTLINED,
  size: ButtonSizes.XL,
};

export const Icon = Template.bind({});
Icon.args = {
  children: <Svg fill={ThemeIconColors.YELLOW} />,
  variant: ButtonVariants.ICON,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  variant: ButtonVariants.CONTAINED,
  square: true,
  size: ButtonSizes.XL,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  variant: ButtonVariants.CONTAINED,
  square: true,
  size: ButtonSizes.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  variant: ButtonVariants.CONTAINED,
  square: true,
  size: ButtonSizes.L,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  variant: ButtonVariants.CONTAINED,
  square: true,
  size: ButtonSizes.XL,
};
