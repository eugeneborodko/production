import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
  title: 'entities/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
