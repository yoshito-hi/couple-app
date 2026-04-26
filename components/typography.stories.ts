import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TypographyH1 } from './typography';

const meta = {
  title: 'Typography/TypographyH1',
  component: TypographyH1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: '表示するテキスト' },
    className: { control: 'text', description: '追加のカスタムクラス' },
  },
} satisfies Meta<typeof TypographyH1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "テスト用テキスト"
  }
}
