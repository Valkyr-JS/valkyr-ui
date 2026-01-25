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
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.queryByText(srOrganizedText);
    await expect(srOrganized).toBeNull();
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

    const srOrganized = canvas.getByText(srOrganizedText);
    await expect(srOrganized).toBeInTheDocument();
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

    const srOrganized = canvas.queryByText(srOrganizedText);
    await expect(srOrganized).toBeNull();
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

    const srOrganized = canvas.getByText(srOrganizedText);
    await expect(srOrganized).toBeInTheDocument();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
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
    userBreakpoint: -1,
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
