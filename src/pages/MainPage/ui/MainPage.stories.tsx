// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
  component: MainPage,
  title: "pages/MainPage",
};

export const LightPage: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DarlPage: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
type Story = StoryObj<typeof MainPage>;
