// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

const meta: Meta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
};

export const Light: Story = {
  args: {},
  decorators: [RouterDecorator],
};

export const Dark: Story = {
  args: {},
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Navbar>;
