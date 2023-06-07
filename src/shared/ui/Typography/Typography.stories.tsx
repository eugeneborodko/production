import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextSize, Typography, TypographyVariants } from './Typography';

export default {
  title: 'shared/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text',
};

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
  title: 'Title',
  variant: TypographyVariants.ERROR,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  text: 'text',
  variant: TypographyVariants.ERROR,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  text: 'text',
  variant: TypographyVariants.PRIMARY,
  size: TextSize.LARGE,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  text: 'text',
  variant: TypographyVariants.PRIMARY,
  size: TextSize.MEDIUM,
};
