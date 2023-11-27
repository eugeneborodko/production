import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesSearch } from './ArticlesSearch';

export default {
  title: 'features/ArticlesSearch',
  component: ArticlesSearch,
} as ComponentMeta<typeof ArticlesSearch>;

const Template: ComponentStory<typeof ArticlesSearch> = (arg) => (
  <ArticlesSearch {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
