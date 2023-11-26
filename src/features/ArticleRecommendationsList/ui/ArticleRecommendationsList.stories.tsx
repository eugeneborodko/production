import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
  title: '***/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (arg) => <ArticleRecommendationsList {...arg} />;

export const Primary = Template.bind({});
Primary.args = {};
