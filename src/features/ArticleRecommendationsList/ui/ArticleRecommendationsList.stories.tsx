import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

const article: Article = {
  id: '1',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  createdAt: '',
  views: 123,
  user: { id: '1', username: 'username' },
  blocks: [],
  type: [],
  title: 'title',
  subtitle: 'subtitle',
};

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (arg) => (
  <ArticleRecommendationsList {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=5`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
