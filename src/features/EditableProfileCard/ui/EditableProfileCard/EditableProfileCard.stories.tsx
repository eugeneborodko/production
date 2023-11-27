import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'feature/EditableProfileCard',
  component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (arg) => (
  <EditableProfileCard {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
