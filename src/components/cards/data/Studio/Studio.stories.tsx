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
    context: "card",
    userBreakpoint: 2,
  },
  argTypes: {
    currentBreakpoint: {
      control: "number",
    },
    userBreakpoint: {
      control: "number",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Studio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboveZoomBreakpoint: Story = {
  args: {
    currentBreakpoint: 3,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await expect(link).toBeInTheDocument();
  },
};

export const BelowZoomBreakpoint: Story = {
  args: {
    currentBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.queryByRole("link");
    await expect(link).toBeNull();
  },
};

export const EqualsZoomBreakpoint: Story = {
  args: {
    currentBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await expect(link).toBeInTheDocument();
  },
};

export const OnModal: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await expect(link).toBeInTheDocument();
  },
};

export const UserDisabled: Story = {
  args: {
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.queryByRole("link");
    await expect(link).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await expect(link).toBeInTheDocument();
  },
};
