import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

const meta: Meta<typeof AppLink> = {
  title: "widget/AppLink",
  component: AppLink,
  args: {
    to: "/",
    children: "text",
  },
};

export const Light: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },

  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};

export const Dark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },

  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};
export default meta;
type Story = StoryObj<typeof AppLink>;
