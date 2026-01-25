import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import AspectRatio from ".";

const stashAspectRatioText = "16:9";
const srAspectRatioText = "Aspect Ratio: 16 by 9";

const meta = {
  title: "Components/Cards/Data/Aspect Ratio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  args: {
    resolution: [1920, 1080],
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

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

    const resolution = canvas.getByText(stashAspectRatioText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srAspectRatioText);
    await expect(srResolution).toBeInTheDocument();
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

    const resolution = canvas.queryByText(stashAspectRatioText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srAspectRatioText);
    await expect(srResolution).toBeNull();
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

    const resolution = canvas.getByText(stashAspectRatioText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srAspectRatioText);
    await expect(srResolution).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    context: "card",
    resolution: [0, 0],
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.queryByText(stashAspectRatioText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srAspectRatioText);
    await expect(srResolution).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText(stashAspectRatioText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srAspectRatioText);
    await expect(srResolution).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.queryByText(stashAspectRatioText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srAspectRatioText);
    await expect(srResolution).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText(stashAspectRatioText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srAspectRatioText);
    await expect(srResolution).toBeInTheDocument();
  },
};

export const ModalContextZeroValue: Story = {
  args: {
    context: "modal",
    resolution: [0, 0],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.queryByText(stashAspectRatioText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srAspectRatioText);
    await expect(srResolution).toBeNull();
  },
};
