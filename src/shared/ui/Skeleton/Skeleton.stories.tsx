import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  width: 50,
  borderRadius: '50%',
};
