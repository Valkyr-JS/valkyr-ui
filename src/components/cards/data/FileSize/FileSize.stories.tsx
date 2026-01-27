import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import FileSize from ".";

const stashFileSizeText = "3.29GB";
const srFileSizeText = "File Size: 3.29 gigabytes";

const meta = {
  title: "Components/Cards/Data/File Size",
  component: FileSize,
  parameters: {
    layout: "centered",
  },
  args: {
    bytes: 3532965252,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileSize>;

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

    const fileSize = canvas.getByText(stashFileSizeText);
    await expect(fileSize).toBeInTheDocument();

    const srFileSize = canvas.getByText(srFileSizeText);
    await expect(srFileSize).toBeInTheDocument();
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

    const fileSize = canvas.queryByText(stashFileSizeText);
    await expect(fileSize).toBeNull();

    const srFileSize = canvas.queryByText(srFileSizeText);
    await expect(srFileSize).toBeNull();
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

    const fileSize = canvas.getByText(stashFileSizeText);
    await expect(fileSize).toBeInTheDocument();

    const srFileSize = canvas.getByText(srFileSizeText);
    await expect(srFileSize).toBeInTheDocument();
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

    const fileSize = canvas.queryByText(stashFileSizeText);
    await expect(fileSize).toBeNull();

    const srFileSize = canvas.queryByText(srFileSizeText);
    await expect(srFileSize).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fileSize = canvas.getByText(stashFileSizeText);
    await expect(fileSize).toBeInTheDocument();

    const srFileSize = canvas.getByText(srFileSizeText);
    await expect(srFileSize).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fileSize = canvas.queryByText(stashFileSizeText);
    await expect(fileSize).toBeNull();

    const srFileSize = canvas.queryByText(srFileSizeText);
    await expect(srFileSize).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fileSize = canvas.getByText(stashFileSizeText);
    await expect(fileSize).toBeInTheDocument();

    const srFileSize = canvas.getByText(srFileSizeText);
    await expect(srFileSize).toBeInTheDocument();
  },
};

export const ModalContextZeroValue: Story = {
  args: {
    context: "modal",
    bytes: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fileSize = canvas.queryByText(stashFileSizeText);
    await expect(fileSize).toBeNull();

    const srFileSize = canvas.queryByText(srFileSizeText);
    await expect(srFileSize).toBeNull();
  },
};
