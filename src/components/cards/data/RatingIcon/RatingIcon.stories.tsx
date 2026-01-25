import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import {
  dataComponentArgTypes,
  ratingArgType,
} from "../../../../../.storybook/argTypes";
import RatingIcon from ".";

const stashRatingText = "4";
const srRatingText = "Rating: 4 stars";

const meta = {
  title: "Components/Cards/Data/Rating icon",
  component: RatingIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    rating100: 74,
    //@ts-ignore - Storybook maps this to the correct type
    ratingSystem: "starsFull",
  },
  argTypes: {
    ...dataComponentArgTypes,
    ...ratingArgType,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RatingIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRatingType: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    ratingSystem: undefined,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText("4");
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText("Rating: 4 stars");
    await expect(srRating).toBeInTheDocument();
  },
};

export const Decimal: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    //@ts-ignore - Storybook maps this to the correct type
    ratingSystem: "decimal",
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText("7.4");
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText("Rating: 7.4 out of 10");
    await expect(srRating).toBeInTheDocument();
  },
};

export const StarFull: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    //@ts-ignore - Storybook maps this to the correct type
    ratingSystem: "starsFull",
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText("4");
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText("Rating: 4 stars");
    await expect(srRating).toBeInTheDocument();
  },
};

export const StarHalf: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    //@ts-ignore - Storybook maps this to the correct type
    ratingSystem: "starsHalf",
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText("3.5");
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText("Rating: 3.5 stars");
    await expect(srRating).toBeInTheDocument();
  },
};

export const StarQuarter: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    //@ts-ignore - Storybook maps this to the correct type
    ratingSystem: "starsQuarter",
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText("3.75");
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText("Rating: 3.75 stars");
    await expect(srRating).toBeInTheDocument();
  },
};

export const StarTenth: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    //@ts-ignore - Storybook maps this to the correct type
    ratingSystem: "starsTenth",
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText("3.7");
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText("Rating: 3.7 stars");
    await expect(srRating).toBeInTheDocument();
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

    const rating = canvas.getByText(stashRatingText);
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText(srRatingText);
    await expect(srRating).toBeInTheDocument();
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

    const rating = canvas.queryByText(stashRatingText);
    await expect(rating).toBeNull();

    const srRating = canvas.queryByText(srRatingText);
    await expect(srRating).toBeNull();
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

    const rating = canvas.getByText(stashRatingText);
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText(srRatingText);
    await expect(srRating).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    rating100: 0,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.queryByText(stashRatingText);
    await expect(rating).toBeNull();

    const srRating = canvas.queryByText(srRatingText);
    await expect(srRating).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText(stashRatingText);
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText(srRatingText);
    await expect(srRating).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.queryByText(stashRatingText);
    await expect(rating).toBeNull();

    const srRating = canvas.queryByText(srRatingText);
    await expect(srRating).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.getByText(stashRatingText);
    await expect(rating).toBeInTheDocument();

    const srRating = canvas.getByText(srRatingText);
    await expect(srRating).toBeInTheDocument();
  },
};

export const ModalContextZeroValue: Story = {
  args: {
    context: "modal",
    rating100: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const rating = canvas.queryByText(stashRatingText);
    await expect(rating).toBeNull();

    const srRating = canvas.queryByText(srRatingText);
    await expect(srRating).toBeNull();
  },
};
