import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import Date from ".";

const meta = {
  title: "Components/Cards/Data/Date",
  component: Date,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    currentBreakpoint: {
      control: "number",
    },
    userBreakpoint: {
      control: "number",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Date>;

export default meta;
type Story = StoryObj<typeof meta>;
