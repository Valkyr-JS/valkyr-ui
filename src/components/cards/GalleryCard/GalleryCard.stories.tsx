import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import GalleryCard from ".";

// Mock data
import gallery4521 from "../../../../mocks/galleries/4521.json";
import gallery17791 from "../../../../mocks/galleries/17791.json";

const pluginConfig = {
  cards__galleryCard__ratingIconBreakpoint: 0 as StashCardGridZoom,
  cards__galleryCard__thumbnailBackgroundImage: false,
};

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
    pluginConfig,
    zoomBreakpoint: 1,
  },
  argTypes: {
    zoomBreakpoint: {
      control: { type: "range", min: 0, max: 3 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GalleryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullData: Story = {
  args: {
    gallery: gallery17791 as SlimGalleryDataFragment,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: "Studio: " + args.gallery.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 7 October 2025");
    await expect(date).toBeInTheDocument();

    // Link to card modal details section should render
    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    await expect(detailsModalBtn).toBeInTheDocument();
  },
};

export const LandscapeThumbnail: Story = {
  args: {
    gallery: gallery17791 as SlimGalleryDataFragment,
  },
};

export const PortraitThumbnail: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
  },
};

export const WithThumbnailBackground: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__galleryCard__thumbnailBackgroundImage: true,
    },
  },
};

export const WithThumbnailBackgroundStyle: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__galleryCard__thumbnailBackgroundStyle: "black",
    },
  },
};
