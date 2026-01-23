import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import Studio from ".";

const meta = {
  title: "Components/Cards/Data/Studio",
  component: Studio,
  parameters: {
    layout: "centered",
  },
  args: {
    studio: {
      id: "1",
      name: "Vixen",
    },
  },
  argTypes: {
    currentBreakpoint: {
      control: { type: "range", min: 0, max: 3 },
    },
    userBreakpoint: {
      control: { type: "range", min: -1, max: 3 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Studio>;

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
    const link = canvas.getByRole("link", { name: "Studio: Vixen" });
    await expect(link).toBeInTheDocument();
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
    const link = canvas.queryByRole("link", { name: "Studio: Vixen" });
    await expect(link).toBeNull();
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
    const link = canvas.getByRole("link", { name: "Studio: Vixen" });
    await expect(link).toBeInTheDocument();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "Studio: Vixen" });
    await expect(link).toBeInTheDocument();
  },
};

export const UserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.queryByRole("link", { name: "Studio: Vixen" });
    await expect(link).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "Studio: Vixen" });
    await expect(link).toBeInTheDocument();
  },
};

export const NoData: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    studio: null,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.queryByRole("link", { name: "Studio:" });
    await expect(link).toBeNull();
  },
};
