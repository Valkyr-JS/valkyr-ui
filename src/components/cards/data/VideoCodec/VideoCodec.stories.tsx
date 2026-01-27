import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import VideoCodec from ".";

const stashBitRateText = "h264";
const srBitRateText = "Video Codec: h264";

const meta = {
  title: "Components/Cards/Data/Video Codec",
  component: VideoCodec,
  parameters: {
    layout: "centered",
  },
  args: {
    codec: "h264",
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof VideoCodec>;

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

export const NoData: Story = {
  args: {
    context: "card",
    codec: "",
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

export const ModalContextNoCodec: Story = {
  args: {
    context: "modal",
    codec: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.queryByText(stashBitRateText);
    await expect(bitRate).toBeNull();

    const srBitRate = canvas.queryByText(srBitRateText);
    await expect(srBitRate).toBeNull();
  },
};
