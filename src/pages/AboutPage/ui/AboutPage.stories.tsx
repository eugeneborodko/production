import { Story, ComponentMeta } from '@storybook/react';

import AboutPage from './AboutPage';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: Story<typeof AboutPage> = () => <AboutPage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
