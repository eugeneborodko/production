import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: '1',
    text: 'comment test text',
    user: {
      id: '2',
      username: 'user2',
      avatar:
        'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    text: 'comment test text',
    user: {
      id: '2',
      username: 'user2',
      avatar:
        'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
    },
  },
  isLoading: true,
};
