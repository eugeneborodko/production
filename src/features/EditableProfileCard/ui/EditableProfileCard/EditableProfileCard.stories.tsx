import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (arg) => (
  <EditableProfileCard {...arg} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
