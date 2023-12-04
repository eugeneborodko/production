import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteArticleReview } from './WriteArticleReview';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/WriteArticleReview',
  component: WriteArticleReview,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
    }),
  ],
} as ComponentMeta<typeof WriteArticleReview>;

const Template: ComponentStory<typeof WriteArticleReview> = (args) => (
  <WriteArticleReview {...args} />
);

// TODO: transformResponse returns object while request returns array. This is why stories are incorrect
export const WithRating = Template.bind({});
WithRating.args = { articleId: '1' };
WithRating.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?articleId=1&userId=1`,
      method: 'GET',
      status: 200,
      response: [{
        rate: 4,
      }],
    },
  ],
};

export const WithoutRating = Template.bind({});
WithoutRating.args = {
  articleId: '1',
};
WithoutRating.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?articleId=1&userId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
