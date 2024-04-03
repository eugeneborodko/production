import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Enter login',
};

export const AutoFocused = Template.bind({});
AutoFocused.args = {
  label: 'Enter login',
  autoFocus: true,
};
