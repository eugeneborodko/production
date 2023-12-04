import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'pages/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const CanEdit = Template.bind({});
CanEdit.args = {};
CanEdit.decorators = [
  StoreDecorator({
    articleDetails: {
      data: {
        user: {
          id: '1',
        },
      },
    },
    user: {
      authData: {
        id: '1',
      },
    },
  }),
];
