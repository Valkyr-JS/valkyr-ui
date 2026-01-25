import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { zoomIndexArgType } from "../../../../.storybook/argTypes";
import GalleryCard from ".";

// Mock data
import fullData from "../../../../mocks/galleries/fullData.slim.json";

const meta = {
  title: "Components/Cards/Gallery card",
  component: GalleryCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    footer: {
      openHandler: fn(),
      pluginConfig: {},
      setSection: fn(),
    },
    pluginConfig: {},
    zoomIndex: 1,
  },
  argTypes: {
    ...zoomIndexArgType,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GalleryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDataDefaults: Story = {
  args: {
    gallery: fullData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Date should render
    const date = canvas.getByText("Date: 31 May 2019");
    await expect(date).toBeInTheDocument();

    // Details should render
    const details = canvas.getByText(fullData.details);
    await expect(details).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Rating banner should render, but not the rating icon
    const ratingBanner = canvas.getAllByText("Rating: 4 stars");
    await expect(ratingBanner).toHaveLength(1);

    // Studio should render
    const studio = canvas.getByText("Studio: Tushy");
    await expect(studio).toBeInTheDocument();
  },
};

export const FullDataAllEnabled: Story = {
  args: {
    pluginConfig: {
      cards__galleryCard__ratingIconZoomIndex: 0,
    },
    gallery: fullData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Date should render
    const date = canvas.getByText("Date: 31 May 2019");
    await expect(date).toBeInTheDocument();

    // Details should render
    const details = canvas.getByText(fullData.details);
    await expect(details).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Rating banner AND icon should render
    const ratingBanner = canvas.getAllByText("Rating: 4 stars");
    await expect(ratingBanner).toHaveLength(2);

    // Studio should render
    const studio = canvas.getByText("Studio: Tushy");
    await expect(studio).toBeInTheDocument();
  },
};
