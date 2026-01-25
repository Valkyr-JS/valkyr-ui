import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import GalleryCard from ".";

// Mock data
import landscapeThumbnail from "../../../../mocks/galleries/landscapeThumbnail.json";
import portraitThumbnail from "../../../../mocks/galleries/portraitThumbnail.json";
// import squareThumbnail from "../../../../mocks/galleries/squareThumbnail.json";

const pluginConfig = {
  cards__galleryCard__ratingIconZoomIndex: 0 as StashCardGridZoom,
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
    footer: {
      openHandler: fn(),
      pluginConfig: {},
      setSection: fn(),
    },
    pluginConfig,
    zoomIndex: 1,
  },
  argTypes: {
    zoomIndex: {
      control: { type: "range", min: 0, max: 3 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GalleryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const footerProps = {
  openHandler: fn(),
  pluginConfig,
  sections: [["details"], ["tags", 5]] as CardModalSectionData[],
  setSection: fn(),
};

export const FullData: Story = {
  args: {
    gallery: landscapeThumbnail as unknown as SlimGalleryDataFragment,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: "Studio: " + args.gallery.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 5 March 2021");
    await expect(date).toBeInTheDocument();
  },
};
export const LandscapeThumbnailWithFooter: Story = {
  args: {
    footer: footerProps,
    gallery: landscapeThumbnail as unknown as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Link to card modal details section should render
    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    await expect(detailsModalBtn).toBeInTheDocument();
  },
};

export const PortraitThumbnailWithFooter: Story = {
  args: {
    footer: footerProps,
    gallery: portraitThumbnail as unknown as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Link to card modal details section should render
    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    await expect(detailsModalBtn).toBeInTheDocument();
  },
};

export const PortraitThumbnailWithThumbnailBackground: Story = {
  args: {
    gallery: portraitThumbnail as unknown as SlimGalleryDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__galleryCard__thumbnailBackgroundImage: true,
    },
  },
};

export const PortraitThumbnailWithThumbnailBackgroundStyle: Story = {
  args: {
    gallery: portraitThumbnail as unknown as SlimGalleryDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__galleryCard__thumbnailBackgroundStyle: "black",
    },
  },
};
