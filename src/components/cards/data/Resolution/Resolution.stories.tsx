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
