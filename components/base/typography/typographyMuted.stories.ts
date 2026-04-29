import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TypographyMuted } from './typography';

const meta = {
  title: 'Base/Typography/TypographyMuted',
  component: TypographyMuted,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: '表示するテキスト' },
    className: { control: 'text', description: '追加のカスタムクラス' },
    as: {
      control: 'select',
      options: ['p', 'span', 'time'],
      description: '使用するHTMLタグ',
    },
  },
} satisfies Meta<typeof TypographyMuted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '補足テキスト（Noto Sans JP / Light 300）',
  },
};

export const AsSpan: Story = {
  args: {
    children: 'spanタグとしてレンダリング',
    as: 'span',
  },
};

export const AsTime: Story = {
  args: {
    children: '2024年4月26日',
    as: 'time',
  },
};
