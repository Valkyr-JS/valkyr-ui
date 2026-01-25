import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { zoomIndexArgType } from "../../../../.storybook/argTypes";
import GalleryCard from ".";

// Mock data
import filelessData from "../../../../mocks/galleries/filelessData.slim.json";
import fullData from "../../../../mocks/galleries/fullData.slim.json";
import minimalData from "../../../../mocks/galleries/minimalData.slim.json";
import portrait from "../../../../mocks/galleries/portrait.slim.json";
import square from "../../../../mocks/galleries/square.slim.json";

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

export const MinimalData: Story = {
  args: {
    gallery: minimalData as SlimGalleryDataFragment,
  },
};

export const FilelessData: Story = {
  args: {
    gallery: filelessData as SlimGalleryDataFragment,
  },
};

export const PortraitBackgroundImage: Story = {
  name: "Portrait thumbnail with background image",
  args: {
    pluginConfig: {
      cards__galleryCard__thumbnailBackgroundImage: true,
    },
    gallery: portrait as SlimGalleryDataFragment,
  },
};

export const PortraitBackgroundStyle: Story = {
  name: "Portrait thumbnail with background style",
  args: {
    pluginConfig: {
      cards__galleryCard__thumbnailBackgroundStyle: "black",
    },
    gallery: portrait as SlimGalleryDataFragment,
  },
};

export const SquareThumbnail: Story = {
  name: "Square thumbnail",
  args: {
    gallery: square as SlimGalleryDataFragment,
  },
};

export const DetailsModalButton: Story = {
  args: {
    gallery: square as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    expect(detailsModalBtn).toBeInTheDocument();
  },
};

export const TagsModalButton: Story = {
  args: {
    gallery: fullData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.getByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeInTheDocument();
  },
};

export const NoTagsModalButton: Story = {
  args: {
    gallery: minimalData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.queryByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeNull();
  },
};
