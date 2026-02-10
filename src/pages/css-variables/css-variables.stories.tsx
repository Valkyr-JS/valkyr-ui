import React from "react";
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
  decorators: (Story) => {
    return (
      <div id="valkyr-ui-settings-container">
        <Story />
      </div>
    );
  },
} satisfies Meta<typeof CssVariablesTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
