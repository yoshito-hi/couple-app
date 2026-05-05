import React from 'react';
import type { Preview } from '@storybook/nextjs-vite'
import { geistSans, geistMono, zenMaruGothic, notoSansJp } from '../lib/fonts'
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'theme-yoshito', title: 'Yoshito' },
          { value: 'theme-naho', title: 'Naho' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      return (
        <div className={`${geistSans.variable} ${geistMono.variable} ${zenMaruGothic.variable} ${notoSansJp.variable} ${theme} font-sans antialiased`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
