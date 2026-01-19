import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import Resolution from ".";

const meta = {
  title: "Components/Cards/Data/Resolution",
  component: Resolution,
  parameters: {
    layout: "centered",
  },
  args: {
    asIcon: false,
    resolution: [1920, 1080],
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
} satisfies Meta<typeof Resolution>;

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
    const resolution = canvas.getByText("1080p");
    await expect(resolution).toBeInTheDocument();
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
    const resolution = canvas.queryByText("1080p");
    await expect(resolution).toBeNull();
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
    const resolution = canvas.getByText("1080p");
    await expect(resolution).toBeInTheDocument();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const resolution = canvas.getByText("1080p");
    await expect(resolution).toBeInTheDocument();
  },
};

export const UserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const resolution = canvas.queryByText("1080p");
    await expect(resolution).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const resolution = canvas.getByText("1080p");
    await expect(resolution).toBeInTheDocument();
  },
};

export const AsIcon: Story = {
  args: {
    asIcon: true,
    context: "card",
    currentBreakpoint: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const resolution = canvas.getByText("HD");
    await expect(resolution).toBeInTheDocument();
  },
};
