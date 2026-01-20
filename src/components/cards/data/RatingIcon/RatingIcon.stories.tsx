import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import RatingIcon from ".";
import "./RatingIcon.scss";

const meta = {
  title: "Components/Cards/Data/Rating icon",
  component: RatingIcon,
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
} satisfies Meta<typeof RatingIcon>;

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 7.4 out of 10");
    await expect(rating).toBeInTheDocument();
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 4 out of 5 stars");
    await expect(rating).toBeInTheDocument();
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 3.5 out of 5 stars");
    await expect(rating).toBeInTheDocument();
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 3.75 out of 5 stars");
    await expect(rating).toBeInTheDocument();
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 3.7 out of 5 stars");
    await expect(rating).toBeInTheDocument();
  },
};

export const AboveZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 7.4 out of 10");
    await expect(rating).toBeInTheDocument();
  },
};

export const BelowZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 0,
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.queryByText("Rated 7.4 out of 10");
    await expect(rating).toBeNull();
  },
};

export const EqualsZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 2,
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 7.4 out of 10");
    await expect(rating).toBeInTheDocument();
  },
};

export const CardContext: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 7.4 out of 10");
    await expect(rating).toBeInTheDocument();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
    ratingSystem: {
      type: "decimal",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 7.4 out of 10");
    await expect(rating).toBeInTheDocument();
  },
};

export const HideZeroData: Story = {
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
    const rating = canvas.queryByText("Unrated");
    await expect(rating).toBeNull();
  },
};

export const ShowZeroData: Story = {
  args: {
    context: "card",
    hideZeroValueData: false,
    rating100: 0,
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Unrated");
    await expect(rating).toBeInTheDocument();
  },
};

export const UserDisabled: Story = {
  args: {
    context: "card",
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.queryByText("Rated 7.4 out of 10");
    await expect(rating).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    ratingSystem: {
      type: "decimal",
    },
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = canvas.getByText("Rated 7.4 out of 10");
    await expect(rating).toBeInTheDocument();
  },
};
