import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchArticlesViewDeprecated } from './SwitchArticlesViewDeprecated';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'features/SwitchArticlesView',
  component: SwitchArticlesViewDeprecated,
} as ComponentMeta<typeof SwitchArticlesViewDeprecated>;

const Template: ComponentStory<typeof SwitchArticlesViewDeprecated> = (args) => (
  <SwitchArticlesViewDeprecated {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
