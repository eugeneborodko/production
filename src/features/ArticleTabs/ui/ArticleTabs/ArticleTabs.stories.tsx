import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTabs } from './ArticleTabs';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/ArticleTabs',
  component: ArticleTabs,
} as ComponentMeta<typeof ArticleTabs>;

const Template: ComponentStory<typeof ArticleTabs> = (args) => (
  <ArticleTabs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
