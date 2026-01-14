import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import Studio from ".";
import { WithCard } from "../../../../../.storybook/decorators";

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
    userBreakpoint: 2,
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
    userBreakpoint: 2,
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
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await expect(link).toBeInTheDocument();
  },
};

export const WithoutZoomData: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await expect(link).toBeInTheDocument();
  },
};
