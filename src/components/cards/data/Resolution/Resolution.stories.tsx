import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Resolution from ".";

const stashResolutionText = "1080p";
const srResolutionText = "Resolution: 1080p";

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
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Resolution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconSD: Story = {
  args: {
    asIcon: true,
    context: "card",
    resolution: [720, 576],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("SD");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: Standard definition");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const IconHD: Story = {
  args: {
    asIcon: true,
    context: "card",
    resolution: [1920, 1080],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("HD");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: High definition");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const Icon2K: Story = {
  name: "Icon 2K",
  args: {
    asIcon: true,
    context: "card",
    resolution: [2560, 1440],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("2K");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: 2K");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const Icon4K: Story = {
  name: "Icon 4K",
  args: {
    asIcon: true,
    context: "card",
    resolution: [3840, 2160],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("4K");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: 4K");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const Icon5K: Story = {
  name: "Icon 5K",
  args: {
    asIcon: true,
    context: "card",
    resolution: [5120, 2880],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("5K");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: 5K");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const Icon6K: Story = {
  name: "Icon 6K",
  args: {
    asIcon: true,
    context: "card",
    resolution: [6016, 3384],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("6K");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: 6K");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const Icon7K: Story = {
  name: "Icon 7K",
  args: {
    asIcon: true,
    context: "card",
    resolution: [7000, 3500],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("7K");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: 7K");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const Icon8K: Story = {
  name: "Icon 8K",
  args: {
    asIcon: true,
    context: "card",
    resolution: [7680, 4320],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("8K");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: 8K");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const IconXL: Story = {
  name: "Icon XL",
  args: {
    asIcon: true,
    context: "card",
    resolution: [10922, 6144],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("XL");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: Extra large");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const PortraitHD: Story = {
  args: {
    context: "card",
    resolution: [1080, 1920],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText(stashResolutionText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srResolutionText);
    await expect(srResolution).toBeInTheDocument();
  },
};

export const PortraitIconHD: Story = {
  args: {
    asIcon: true,
    context: "card",
    resolution: [1080, 1920],
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText("HD");
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText("Resolution: High definition");
    await expect(srResolution).toBeInTheDocument();
  },
};

export const AboveZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText(stashResolutionText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srResolutionText);
    await expect(srResolution).toBeInTheDocument();
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

    const resolution = canvas.queryByText(stashResolutionText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srResolutionText);
    await expect(srResolution).toBeNull();
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

    const resolution = canvas.getByText(stashResolutionText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srResolutionText);
    await expect(srResolution).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    context: "card",
    resolution: [0, 0],
    currentBreakpoint: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.queryByText(stashResolutionText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srResolutionText);
    await expect(srResolution).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText(stashResolutionText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srResolutionText);
    await expect(srResolution).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.queryByText(stashResolutionText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srResolutionText);
    await expect(srResolution).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const resolution = canvas.getByText(stashResolutionText);
    await expect(resolution).toBeInTheDocument();

    const srResolution = canvas.getByText(srResolutionText);
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

    const resolution = canvas.queryByText(stashResolutionText);
    await expect(resolution).toBeNull();

    const srResolution = canvas.queryByText(srResolutionText);
    await expect(srResolution).toBeNull();
  },
};
