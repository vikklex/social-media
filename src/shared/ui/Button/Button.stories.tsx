// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "widget/Button",
};

export const ClearDark: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "Clear",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearLight: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "Clear",
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: "Text",
  },
};

export const OutlineLight: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: "Text",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
