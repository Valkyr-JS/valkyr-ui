import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Organized from ".";

const srOrganizedText = "Organised";

const meta = {
  title: "Components/Cards/Data/Organized",
  component: Organized,
  parameters: {
    layout: "centered",
  },
  args: {
    organized: true,
  },
  argTypes: { ...dataComponentArgTypes },
  tags: ["autodocs"],
} satisfies Meta<typeof Organized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unorganized: Story = {
  args: {
    context: "card",
    organized: false,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.queryByText(srOrganizedText);
    await expect(srOrganized).toBeNull();
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

    const srOrganized = canvas.getByText(srOrganizedText);
    await expect(srOrganized).toBeInTheDocument();
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

    const srOrganized = canvas.queryByText(srOrganizedText);
    await expect(srOrganized).toBeNull();
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

    const srOrganized = canvas.getByText(srOrganizedText);
    await expect(srOrganized).toBeInTheDocument();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.getByText(srOrganizedText);
    await expect(srOrganized).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.queryByText(srOrganizedText);
    await expect(srOrganized).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.getByText(srOrganizedText);
    await expect(srOrganized).toBeInTheDocument();
  },
};
