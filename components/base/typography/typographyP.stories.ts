
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TypographyP } from './typography';

const meta = {
  title: 'Base/Typography/TypographyP',
  component: TypographyP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: '表示するテキスト' },
    className: { control: 'text', description: '追加のカスタムクラス' },
  },
} satisfies Meta<typeof TypographyP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "標準テキスト（Noto Sans Jp）"
  }
}
