// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ErrorPage> = {
  title: "widget/ErrorPage",
  component: ErrorPage,
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
type Story = StoryObj<typeof ErrorPage>;
