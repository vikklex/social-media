// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
};

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;
