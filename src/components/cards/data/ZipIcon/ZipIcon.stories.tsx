import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import ZipIcon from ".";

const srZipText = "ZIP file gallery";

const meta = {
  title: "Components/Cards/Data/Zip icon",
  component: ZipIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    isZip: true,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ZipIcon>;

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

    const srZip = canvas.getByText(srZipText);
    await expect(srZip).toBeInTheDocument();
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

    const srZip = canvas.queryByText(srZipText);
    await expect(srZip).toBeNull();
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

    const srZip = canvas.getByText(srZipText);
    await expect(srZip).toBeInTheDocument();
  },
};

export const FalseValue: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    isZip: false,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srZip = canvas.queryByText(srZipText);
    await expect(srZip).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srZip = canvas.getByText(srZipText);
    await expect(srZip).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srZip = canvas.queryByText(srZipText);
    await expect(srZip).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srZip = canvas.getByText(srZipText);
    await expect(srZip).toBeInTheDocument();
  },
};

export const ModalContextFalseValue: Story = {
  args: {
    context: "modal",
    isZip: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srZip = canvas.queryByText(srZipText);
    await expect(srZip).toBeNull();
  },
};
