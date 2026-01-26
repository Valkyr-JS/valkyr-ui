import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import BitRate from ".";

const stashBitRateText = "12.42 mbps";
const srBitRateText = "Bit Rate: 12.42 megabits per second";

const meta = {
  title: "Components/Cards/Data/Bit Rate",
  component: BitRate,
  parameters: {
    layout: "centered",
  },
  args: {
    bytes: 12418801,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BitRate>;

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
    bytes: 0,
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
    bytes: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bitRate = canvas.queryByText(stashBitRateText);
    await expect(bitRate).toBeNull();

    const srBitRate = canvas.queryByText(srBitRateText);
    await expect(srBitRate).toBeNull();
  },
};
