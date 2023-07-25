import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchArticlesView } from './SwitchArticlesView';

export default {
  title: 'shared/SwitchArticlesView',
  component: SwitchArticlesView,
} as ComponentMeta<typeof SwitchArticlesView>;

const Template: ComponentStory<typeof SwitchArticlesView> = (args) => <SwitchArticlesView { ...args } />;

export const Primary = Template.bind({});
Primary.args = {};
