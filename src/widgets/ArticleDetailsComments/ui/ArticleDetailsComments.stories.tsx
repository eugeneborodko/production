import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'widgets/ArticleDetailsComments',
  component: ArticleDetailsComments,
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (arg) => (
  <ArticleDetailsComments {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
