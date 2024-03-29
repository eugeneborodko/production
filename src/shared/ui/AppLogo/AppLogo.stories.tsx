import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLogo } from './AppLogo';

export default {
  title: 'shared/AppLogo',
  component: AppLogo,
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => <AppLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
