import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
