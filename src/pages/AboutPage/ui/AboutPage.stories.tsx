import { Story, ComponentMeta } from '@storybook/react';
import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: Story<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
