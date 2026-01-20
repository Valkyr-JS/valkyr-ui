import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import OCount from ".";

const meta = {
  title: "Components/Cards/Data/O count",
  component: OCount,
  parameters: {
    layout: "centered",
  },
  args: {
    count: 3,
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
} satisfies Meta<typeof OCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboveZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const count = canvas.getByText("O Count: 3");
    await expect(count).toBeInTheDocument();
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
    const count = canvas.queryByText("O Count: 3");
    await expect(count).toBeNull();
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
    const count = canvas.getByText("O Count: 3");
    await expect(count).toBeInTheDocument();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const count = canvas.getByText("O Count: 3");
    await expect(count).toBeInTheDocument();
  },
};

export const UserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const count = canvas.queryByText("O Count: 3");
    await expect(count).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const count = canvas.getByText("O Count: 3");
    await expect(count).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    context: "card",
    count: 0,
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const count = canvas.queryByText("O Count: 0");
    await expect(count).toBeNull();
  },
};
