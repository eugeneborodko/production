import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwitchArticlesView } from './SwitchArticlesView';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/SwitchArticlesView',
  component: SwitchArticlesView,
} as ComponentMeta<typeof SwitchArticlesView>;

const Template: ComponentStory<typeof SwitchArticlesView> = (args) => (
  <SwitchArticlesView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
