import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeIconColors } from '@/app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  themeColor: ThemeIconColors.BLUE,
};
