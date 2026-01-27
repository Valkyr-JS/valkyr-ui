import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import FrameRate from ".";

const stashBitRateText = "23.98 fps";
const srBitRateText = "Frame Rate: 23.98 frames per second";

const meta = {
  title: "Components/Cards/Data/Frame Rate",
  component: FrameRate,
  parameters: {
    layout: "centered",
  },
  args: {
    rate: 23.98,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FrameRate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboveZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.getByText(stashBitRateText);
    await expect(bitRate).toBeInTheDocument();

    const srBitRate = canvas.getByText(srBitRateText);
    await expect(srBitRate).toBeInTheDocument();
  },
};

export const BelowZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 0,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.queryByText(stashBitRateText);
    await expect(bitRate).toBeNull();

    const srBitRate = canvas.queryByText(srBitRateText);
    await expect(srBitRate).toBeNull();
  },
};

export const EqualsZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 2,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.getByText(stashBitRateText);
    await expect(bitRate).toBeInTheDocument();

    const srBitRate = canvas.getByText(srBitRateText);
    await expect(srBitRate).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    context: "card",
    rate: 0,
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.queryByText(stashBitRateText);
    await expect(bitRate).toBeNull();

    const srBitRate = canvas.queryByText(srBitRateText);
    await expect(srBitRate).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.getByText(stashBitRateText);
    await expect(bitRate).toBeInTheDocument();

    const srBitRate = canvas.getByText(srBitRateText);
    await expect(srBitRate).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.queryByText(stashBitRateText);
    await expect(bitRate).toBeNull();

    const srBitRate = canvas.queryByText(srBitRateText);
    await expect(srBitRate).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.getByText(stashBitRateText);
    await expect(bitRate).toBeInTheDocument();

    const srBitRate = canvas.getByText(srBitRateText);
    await expect(srBitRate).toBeInTheDocument();
  },
};

export const ModalContextZeroValue: Story = {
  args: {
    context: "modal",
    rate: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.queryByText(stashBitRateText);
    await expect(bitRate).toBeNull();

    const srBitRate = canvas.queryByText(srBitRateText);
    await expect(srBitRate).toBeNull();
  },
};
