import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsFilters } from './ArticleDetailsFilters';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'widgets/ArticleDetailsFilters',
  component: ArticleDetailsFilters,
} as ComponentMeta<typeof ArticleDetailsFilters>;

const Template: ComponentStory<typeof ArticleDetailsFilters> = (arg) => (
  <ArticleDetailsFilters {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
