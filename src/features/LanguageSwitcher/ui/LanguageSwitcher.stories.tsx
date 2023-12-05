import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LanguageSwitcher } from './LanguageSwitcher';

export default {
  title: 'features/LanguageSwitcher',
  component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => (
  <LanguageSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Short = Template.bind({});
Short.args = {
  short: true,
};
