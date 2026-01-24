import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Duration from ".";

const stashDurationText = "37:55";
const srDurationText = "Duration: 37 minutes 55 seconds";

const meta = {
  title: "Components/Cards/Data/Duration",
  component: Duration,
  parameters: {
    layout: "centered",
  },
  args: {
    duration: 2275.88,
    timestampPadding: false,
  },
  argTypes: {
    ...dataComponentArgTypes,
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

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
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

    const duration = canvas.queryByText(stashDurationText);
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText(srDurationText);
    await expect(srDuration).toBeNull();
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

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
  },
};

export const NoDataAvailable: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    duration: 0,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.queryByText("0 seconds");
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText("Duration: 0 seconds");
    await expect(srDuration).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.queryByText(stashDurationText);
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText(srDurationText);
    await expect(srDuration).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    duration: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.queryByText("0 seconds");
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText("Duration: 0 seconds");
    await expect(srDuration).toBeNull();
  },
};
