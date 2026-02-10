import type { Meta, StoryObj } from "@storybook/react-vite";
import CssVariablesTab from "./";
import "../pages.scss";

const meta = {
  title: "Pages/Settings/CSS Variables",
  component: CssVariablesTab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CssVariablesTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
