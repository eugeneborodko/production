import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsFilters } from './ArticleDetailsFilters';

export default {
  title: 'features/ArticleDetailsFilters',
  component: ArticleDetailsFilters,
} as ComponentMeta<typeof ArticleDetailsFilters>;

const Template: ComponentStory<typeof ArticleDetailsFilters> = (arg) => (
  <ArticleDetailsFilters {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
