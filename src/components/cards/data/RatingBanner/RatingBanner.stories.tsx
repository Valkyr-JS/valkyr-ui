import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import RatingBanner from ".";

const meta = {
  title: "Components/Cards/Data/Rating banner",
  component: RatingBanner,
  parameters: {
    layout: "centered",
  },
  args: {
    rating100: 74,
  },
  argTypes: {
    rating100: {
      control: { type: "range", min: 0, max: 100 },
    },
    currentBreakpoint: {
      control: { type: "range", min: 0, max: 3 },
    },
    userBreakpoint: {
      control: { type: "range", min: -1, max: 3 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RatingBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Decimal: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 2,
  },
};

export const StarFull: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    ratingSystem: {
      type: "stars",
      starPrecision: "full",
    },
    userBreakpoint: 2,
  },
};

export const StarHalf: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    ratingSystem: {
      type: "stars",
      starPrecision: "half",
    },
    userBreakpoint: 2,
  },
};

export const StarQuarter: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    ratingSystem: {
      type: "stars",
      starPrecision: "quarter",
    },
    userBreakpoint: 2,
  },
};

export const StarTenth: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    ratingSystem: {
      type: "stars",
      starPrecision: "tenth",
    },
    userBreakpoint: 2,
  },
};

export const AlwaysHideZero: Story = {
  args: {
    context: "card",
    hideZeroValueData: true,
    rating100: 0,
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.queryByText("Rating: 0");
    await expect(rating).toBeNull();
  },
};
