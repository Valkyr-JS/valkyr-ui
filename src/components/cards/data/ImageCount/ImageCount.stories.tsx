import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import ImageCount from ".";

const srCountText = "66 images";

const meta = {
  title: "Components/Cards/Data/Image count",
  component: ImageCount,
  parameters: {
    layout: "centered",
  },
  args: {
    abbreviate: false,
    count: 66,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountIs1: Story = {
  args: {
    context: "card",
    count: 1,
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.getByText("1 image");
    await expect(srCount).toBeInTheDocument();
  },
};

export const Abbreviated: Story = {
  args: {
    abbreviate: true,
    context: "card",
    count: 69420,
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.getByText("69.4k images");
    await expect(srCount).toBeInTheDocument();
  },
};

export const Unabbreviated: Story = {
  args: {
    abbreviate: false,
    context: "card",
    count: 69420,
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.getByText("69420 images");
    await expect(srCount).toBeInTheDocument();
  },
};

export const AboveZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.getByText(srCountText);
    await expect(srCount).toBeInTheDocument();
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

    const srCount = canvas.queryByText(srCountText);
    await expect(srCount).toBeNull();
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

    const srCount = canvas.getByText(srCountText);
    await expect(srCount).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    context: "card",
    count: 0,
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.queryByText(srCountText);
    await expect(srCount).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.getByText(srCountText);
    await expect(srCount).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.queryByText(srCountText);
    await expect(srCount).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.getByText(srCountText);
    await expect(srCount).toBeInTheDocument();
  },
};

export const ModalContextZeroValue: Story = {
  args: {
    context: "modal",
    count: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCount = canvas.queryByText(srCountText);
    await expect(srCount).toBeNull();
  },
};
