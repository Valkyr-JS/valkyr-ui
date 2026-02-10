import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { mergeConfig } from "@/helpers";
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
    abbreviateCounters: false,
    footer: {
      openHandler: fn(),
      pluginConfig: mergeConfig({}),
      setSection: fn(),
    },
    pluginConfig: mergeConfig({}),
    selecting: false,
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

    // File size icon should NOT render
    const fileSize = canvas.queryByText("File Size: 75.12 megabytes");
    await expect(fileSize).toBeNull();

    // Image collection icon should NOT render
    const imageCollectionIcon = canvas.queryByText("Image collection");
    await expect(imageCollectionIcon).toBeNull();

    // Image count should render
    const imageCount = canvas.getByText("50 images");
    await expect(imageCount).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Performer list should NOT render
    const performerA = canvas.queryByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.queryByRole("link", { name: "Markus Dupree" });
    await expect(performerA).toBeNull();
    await expect(performerB).toBeNull();

    // Photographer should NOT render
    const photographer = canvas.queryByText("Photographer: Pho Tographer");
    await expect(photographer).toBeNull();

    // Rating banner should render, but not the rating icon
    const ratingBanner = canvas.getAllByText("Rating: 4 stars");
    await expect(ratingBanner).toHaveLength(1);

    // Studio should render
    const studio = canvas.getByText("Studio: Tushy");
    await expect(studio).toBeInTheDocument();

    // Zip icon should NOT render
    const zipIcon = canvas.queryByText("ZIP file");
    await expect(zipIcon).toBeNull();
  },
};

export const FullDataAllEnabled: Story = {
  args: {
    pluginConfig: mergeConfig({
      cards__galleryCard__fileSizeZoomIndex: 0,
      cards__galleryCard__imageCollectionIconZoomIndex: 0,
      cards__galleryCard__performerListZoomIndex: 0,
      cards__galleryCard__photographerZoomIndex: 0,
      cards__galleryCard__ratingIconZoomIndex: 0,
      cards__galleryCard__zipIconZoomIndex: 0,
    }),
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

    // File size icon should render
    const fileSize = canvas.getByText("File Size: 75.12 megabytes");
    await expect(fileSize).toBeInTheDocument();

    // Image collection icon should NOT render because this is a zip file -
    // positive test is separate
    const imageCollectionIcon = canvas.queryByText("Image collection");
    await expect(imageCollectionIcon).toBeNull();

    // Image count should render
    const imageCount = canvas.getByText("50 images");
    await expect(imageCount).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Performer list should render
    const performerA = canvas.getByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.getByRole("link", { name: "Markus Dupree" });
    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();

    // Photographer should render
    const photographer = canvas.getByText("Photographer: Pho Tographer");
    await expect(photographer).toBeInTheDocument();

    // Rating banner AND icon should render
    const ratingBanner = canvas.getAllByText("Rating: 4 stars");
    await expect(ratingBanner).toHaveLength(2);

    // Studio should render
    const studio = canvas.getByText("Studio: Tushy");
    await expect(studio).toBeInTheDocument();

    // Zip icon should render
    const zipIcon = canvas.getByText("ZIP file");
    await expect(zipIcon).toBeInTheDocument();
  },
};

export const IsImageCollection: Story = {
  args: {
    gallery: square as SlimGalleryDataFragment,
    pluginConfig: mergeConfig({
      cards__galleryCard__imageCollectionIconZoomIndex: 0,
      cards__galleryCard__zipIconZoomIndex: 0,
    }),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Image collection icon should render
    const imageCollectionIcon = canvas.getByText("Image collection");
    await expect(imageCollectionIcon).toBeInTheDocument();

    // Zip icon should NOT render
    const zipIcon = canvas.queryByText("ZIP file");
    await expect(zipIcon).toBeNull();
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
    pluginConfig: mergeConfig({
      cards__galleryCard__thumbnailBackgroundImage: true,
    }),
    gallery: portrait as SlimGalleryDataFragment,
  },
};

export const PortraitBackgroundStyle: Story = {
  name: "Portrait thumbnail with background style",
  args: {
    pluginConfig: mergeConfig({
      cards__galleryCard__thumbnailBackgroundStyle: "black",
    }),
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

export const PerformersModalButton: Story = {
  args: {
    gallery: fullData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.getByRole("button", {
      name: "Performers",
    });
    expect(tagsModalBtn).toBeInTheDocument();
  },
};

export const NoPerformersModalButton: Story = {
  args: {
    gallery: minimalData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.queryByRole("button", {
      name: "Performers",
    });
    expect(tagsModalBtn).toBeNull();
  },
};

export const FilesModalButton: Story = {
  args: {
    gallery: fullData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fileInfoModalBtn = canvas.getByRole("button", {
      name: "File Info",
    });
    expect(fileInfoModalBtn).toBeInTheDocument();
  },
};

export const NoFilesModalButton: Story = {
  args: {
    gallery: filelessData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fileInfoModalBtn = canvas.queryByRole("button", {
      name: "File Info",
    });
    expect(fileInfoModalBtn).toBeNull();
  },
};

export const ScenesModalButton: Story = {
  args: {
    gallery: fullData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const scenesModalBtn = canvas.getByRole("button", {
      name: "Scenes",
    });
    expect(scenesModalBtn).toBeInTheDocument();
  },
};

export const NoScenesModalButton: Story = {
  args: {
    gallery: minimalData as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const scenesModalBtn = canvas.queryByRole("button", {
      name: "Scenes",
    });
    expect(scenesModalBtn).toBeNull();
  },
};

export const DisableModalsWhenSelecting: Story = {
  args: {
    gallery: fullData as SlimGalleryDataFragment,
    selecting: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    const tagsModalBtn = canvas.getByRole("button", {
      name: "Tags",
    });

    expect(detailsModalBtn).toBeDisabled();
    expect(tagsModalBtn).toBeDisabled();
  },
};
