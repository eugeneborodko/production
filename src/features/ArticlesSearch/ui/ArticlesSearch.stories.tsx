import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesSearch } from './ArticlesSearch';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/ArticlesSearch',
  component: ArticlesSearch,
} as ComponentMeta<typeof ArticlesSearch>;

const Template: ComponentStory<typeof ArticlesSearch> = (arg) => (
  <ArticlesSearch {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
