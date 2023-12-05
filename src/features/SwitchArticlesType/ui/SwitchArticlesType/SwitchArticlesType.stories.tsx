import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwitchArticlesType } from './SwitchArticlesType';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/SwitchArticlesType',
  component: SwitchArticlesType,
} as ComponentMeta<typeof SwitchArticlesType>;

const Template: ComponentStory<typeof SwitchArticlesType> = (args) => (
  <SwitchArticlesType {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
