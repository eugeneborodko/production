import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../Typography/Typography';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Typography title="Title" text="Text" />,
};
