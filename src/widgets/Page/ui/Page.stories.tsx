import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'widgets/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <h1>Heading</h1>,
};
Primary.decorators = [StoreDecorator({})];
