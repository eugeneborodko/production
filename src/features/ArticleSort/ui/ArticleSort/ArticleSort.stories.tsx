import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSort } from './ArticleSort';

export default {
  title: 'shared/ArticleSort',
  component: ArticleSort,
} as ComponentMeta<typeof ArticleSort>;

const Template: ComponentStory<typeof ArticleSort> = (args) => (
  <ArticleSort {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
