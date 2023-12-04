import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
// Primary.decorators = [StoreDecorator({})]; TODO: fix infinite loop here
