import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import Date from ".";

const meta = {
  title: "Components/Cards/Data/Date",
  component: Date,
  parameters: {
    layout: "centered",
  },
  args: {
    date: "2015-12-12",
  },
  argTypes: {
    currentBreakpoint: {
      control: { type: "range", min: 0, max: 3 },
    },
    userBreakpoint: {
      control: { type: "range", min: -1, max: 3 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Date>;

export default meta;
type Story = StoryObj<typeof meta>;

const longDate = "Date: 12 December 2015";

export const AboveZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.getByText(longDate);
    await expect(date).toBeInTheDocument();
  },
};

export const BelowZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 0,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.queryByText(longDate);
    await expect(date).toBeNull();
  },
};

export const EqualsZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 2,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.getByText(longDate);
    await expect(date).toBeInTheDocument();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.getByText(longDate);
    await expect(date).toBeInTheDocument();
  },
};

export const UserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.queryByText(longDate);
    await expect(date).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.getByText(longDate);
    await expect(date).toBeInTheDocument();
  },
};
