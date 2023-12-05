import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';

// eslint-disable-next-line yauheni-baradzko-path-checker/layer-imports
import { ArticleTypes } from '@/entities/Article';

export default {
  title: 'shared/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      value: ArticleTypes.ALL,
      content: 'all',
    },
    {
      value: ArticleTypes.ECONOMICS,
      content: 'economics',
    },
    {
      value: ArticleTypes.IT,
      content: 'IT',
    },
    {
      value: ArticleTypes.MEDICINE,
      content: 'medicine',
    },
  ],
  onTabClick: action('onTabClick'),
};
