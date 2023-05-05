import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
      description: "ボタンバリアント",
      table: {
        type: {
          summary: "primary | secondary",
        },
        defaultValue: {
          summary: "primary",
        },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "ボタンテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disabledフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: "横幅",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "縦幅",
      table: {
        type: { summary: "number" },
      },
    },
    onClick: {
      description: "onClickイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// プライマリボタン
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

// セカンダリボタン
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

// 無効化ボタン
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
