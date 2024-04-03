import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line yauheni-baradzko-path-checker/layer-imports
import { Select } from './Select';
// eslint-disable-next-line yauheni-baradzko-path-checker/layer-imports
import { Currencies } from '@/entities/Currency';

export default {
  title: 'shared/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'select currency',
  options: [
    { value: Currencies.USD, content: Currencies.USD },
    {
      value: Currencies.EUR,
      content: Currencies.EUR,
    },
  ],
};
