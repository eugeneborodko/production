import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeaderDeprecated';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
  <EditableProfileCardHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
