import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
