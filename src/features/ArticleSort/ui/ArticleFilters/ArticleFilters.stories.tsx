import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleFilters } from './ArticleFilters';

export default {
  title: 'shared/ArticleFilters',
  component: ArticleFilters,
} as ComponentMeta<typeof ArticleFilters>;

const Template: ComponentStory<typeof ArticleFilters> = (args) => (
  <ArticleFilters {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
