import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '../../src/shared/consts/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: [
    {
      name: 'light',
      class: ['app', Theme.LIGHT],
      color: '#ffffff',
      default: true,
    },
    { name: 'dark', class: ['app', Theme.DARK], color: '#000000' },
    { name: 'orange', class: ['app', Theme.ORANGE], color: '#f79540' },
  ],
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
