import { Meta, StoryFn } from '@storybook/react';
import Badge from './index';

export default {
  title: 'Atoms/Badge',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'バッジの色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Orange = {
  render: Template,
  args: { content: '1', backgroundColor: '#ed9f28' },
};

export const Green = {
  render: Template,
  args: { content: '2', backgroundColor: '#32bf00' },
};

export const Red = {
  render: Template,
  args: { content: '10', backgroundColor: '#d4001a' },
};
