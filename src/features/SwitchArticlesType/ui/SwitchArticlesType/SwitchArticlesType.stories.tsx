import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchArticlesType } from './SwitchArticlesType';

export default {
  title: 'features/SwitchArticlesType',
  component: SwitchArticlesType,
} as ComponentMeta<typeof SwitchArticlesType>;

const Template: ComponentStory<typeof SwitchArticlesType> = (args) => (
  <SwitchArticlesType {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
