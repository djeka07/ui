import React from 'react';
import type { Preview } from '@storybook/react';
import createVariables from '../src/styles/stylesheet';
import { createDefaultTheme } from '../src/styles/theme';
import UiWrapper from '../src/components/index';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const theme = context.parameters.theme || context.globals.theme;
      return (
        <>
          {createVariables(createDefaultTheme(theme), { '--hejsan': 'ksmkdms', '--dsa': 'smskmsk' })}
          <UiWrapper>
            <Story />
          </UiWrapper>
        </>
      );
    },
  ],
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'sun',
      items: [
        { value: 'light', icon: 'sun', title: 'light' },
        { value: 'dark', icon: 'moon', title: 'dark' },
      ],
      showName: true,
    },
  },
};

export default preview;
