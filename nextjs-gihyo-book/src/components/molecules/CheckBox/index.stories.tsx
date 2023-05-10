import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckBox from '.';

export default {
  title: 'Molecules/CheckBox',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'ラベル',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'チェック',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    onChange: {
      description: '値が変化したときのイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const WithLabel = {
  render: Template,
  args: { label: 'Label' },
};
