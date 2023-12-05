import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

// TODO: add more cases
