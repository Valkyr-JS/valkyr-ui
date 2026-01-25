import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import OCount from ".";

const stashCountText = "3";
const srCountText = "O Count: 3";

const meta = {
  title: "Components/Cards/Data/O count",
  component: OCount,
  parameters: {
    layout: "centered",
  },
  args: {
    count: 3,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OCount>;

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

    const count = canvas.getByText(stashCountText);
    await expect(count).toBeInTheDocument();

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

    const count = canvas.queryByText(stashCountText);
    await expect(count).toBeNull();

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

    const count = canvas.getByText(stashCountText);
    await expect(count).toBeInTheDocument();

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

    const count = canvas.queryByText(stashCountText);
    await expect(count).toBeNull();

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

    const count = canvas.getByText(stashCountText);
    await expect(count).toBeInTheDocument();

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

    const count = canvas.queryByText(stashCountText);
    await expect(count).toBeNull();

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

    const count = canvas.getByText(stashCountText);
    await expect(count).toBeInTheDocument();

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

    const count = canvas.queryByText(stashCountText);
    await expect(count).toBeNull();

    const srCount = canvas.queryByText(srCountText);
    await expect(srCount).toBeNull();
  },
};
