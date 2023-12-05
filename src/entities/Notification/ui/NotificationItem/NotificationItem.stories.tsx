import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  notification: {
    description: 'Notification',
    id: '1',
    title: 'Title',
    userId: '1',
  },
};
