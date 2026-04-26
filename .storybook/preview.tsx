import React from 'react';
import type { Preview } from '@storybook/nextjs-vite'
import { geistSans, geistMono, zenMaruGothic } from '../lib/fonts'
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
  decorators: [
    (Story) => (
      <div className={`${geistSans.variable} ${geistMono.variable} ${zenMaruGothic.variable} font-sans antialiased`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
