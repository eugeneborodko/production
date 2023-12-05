import { Story, ComponentMeta } from '@storybook/react';
import MainPage from './MainPage';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: Story<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
