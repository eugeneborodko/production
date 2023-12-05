import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from '../../model/types/notification';
import NotificationList from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

const notifications: Notification = {
  id: '1',
  title: 'title',
  description: 'description',
  userId: '1',
};

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...notifications, id: '1' },
        { ...notifications, id: '2' },
        { ...notifications, id: '3' },
      ],
    },
  ],
};
