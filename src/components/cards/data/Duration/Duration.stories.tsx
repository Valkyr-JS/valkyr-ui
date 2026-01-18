import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import Duration from ".";

const meta = {
  title: "Components/Cards/Data/Duration",
  component: Duration,
  parameters: {
    layout: "centered",
  },
  args: {
    duration: 1702.07,
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
} satisfies Meta<typeof Duration>;

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
    const duration = canvas.getByText("Duration: 28 minutes 22 seconds");
    await expect(duration).toBeInTheDocument();
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
    const duration = canvas.queryByText("Duration: 28 minutes 22 seconds");
    await expect(duration).toBeNull();
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
    const duration = canvas.getByText("Duration: 28 minutes 22 seconds");
    await expect(duration).toBeInTheDocument();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const duration = canvas.getByText("Duration: 28 minutes 22 seconds");
    await expect(duration).toBeInTheDocument();
  },
};

export const UserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const duration = canvas.queryByText("Duration: 28 minutes 22 seconds");
    await expect(duration).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const duration = canvas.getByText("Duration: 28 minutes 22 seconds");
    await expect(duration).toBeInTheDocument();
  },
};
