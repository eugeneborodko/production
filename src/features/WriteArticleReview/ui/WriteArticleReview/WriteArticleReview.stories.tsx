import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteArticleReview } from './WriteArticleReview';

export default {
  title: 'features/WriteArticleReview',
  component: WriteArticleReview,
} as ComponentMeta<typeof WriteArticleReview>;

const Template: ComponentStory<typeof WriteArticleReview> = (args) => (
  <WriteArticleReview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
