import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'some comment',
      user: {
        id: '1',
        username: 'user1',
        avatar:
          'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
        features: {
          isArticleRatingEnabled: true,
          isArticleCommentsEnabled: true,
        },
      },
    },
    {
      id: '1',
      text: 'some comment',
      user: {
        id: '2',
        username: 'user2',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU',
        features: {
          isArticleRatingEnabled: true,
          isArticleCommentsEnabled: true,
        },
      },
    },
  ],
};

export const WithoutComments = Template.bind({});
WithoutComments.args = {
  comments: [],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
