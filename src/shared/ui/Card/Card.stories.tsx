import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../Typography/Typography';

export default {
  title: 'shared/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Typography title="Title" text="Text" />,
};
