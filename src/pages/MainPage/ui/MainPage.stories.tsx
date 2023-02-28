import { Story, ComponentMeta } from '@storybook/react';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: Story<typeof MainPage> = (args) => <MainPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
