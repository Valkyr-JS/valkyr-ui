import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { GalleryCardModalContent } from ".";

// Mock data
import filelessData from "../../../../mocks/galleries/filelessData.json";
import fullData from "../../../../mocks/galleries/fullData.json";
import minimalData from "../../../../mocks/galleries/minimalData.json";
import portrait from "../../../../mocks/galleries/portrait.json";
import square from "../../../../mocks/galleries/square.json";

const meta = {
  title: "Components/Cards/Gallery card modal content",
  component: GalleryCardModalContent,
  decorators: [
    (Story) => (
      <div
        className={"vui-card-modal vui-gallery-card-modal modal show"}
        style={{ display: "block", position: "initial" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    closeHandler: fn(),
    pluginConfig: {},
    section: "details",
    setSection: fn(),
    titleID: "titleID",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GalleryCardModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDataDefaults: Story = {
  args: {
    gallery: fullData as GalleryDataFragment,
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

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Photographer should render
    const photographer = canvas.getByText("Photographer: Pho Tographer");
    await expect(photographer).toBeInTheDocument();

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
    pluginConfig: {
      cards__galleryCard__fileSizeZoomIndex: 0,
      cards__galleryCard__zipIconZoomIndex: 0,
    },
    gallery: fullData as GalleryDataFragment,
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

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Photographer should render
    const photographer = canvas.getByText("Photographer: Pho Tographer");
    await expect(photographer).toBeInTheDocument();

    // Rating banner should render, but not the rating icon
    const ratingBanner = canvas.getAllByText("Rating: 4 stars");
    await expect(ratingBanner).toHaveLength(1);

    // Studio should render
    const studio = canvas.getByText("Studio: Tushy");
    await expect(studio).toBeInTheDocument();

    // Zip icon should render
    const zipIcon = canvas.getByText("ZIP file");
    await expect(zipIcon).toBeInTheDocument();
  },
};

export const RatingIconNotBanner: Story = {
  args: {
    pluginConfig: {
      cards__galleryCard__ratingBannerZoomIndex: -1,
      cards__galleryCard__ratingIconZoomIndex: 0,
    },
    gallery: fullData as GalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Rating icon should render, but not the rating banner
    const ratingBanner = canvas.getAllByText("Rating: 4 stars");
    await expect(ratingBanner).toHaveLength(1);
  },
};

export const MinimalData: Story = {
  args: {
    gallery: minimalData as GalleryDataFragment,
  },
};

export const FilelessData: Story = {
  args: {
    gallery: filelessData as GalleryDataFragment,
  },
};

export const PortraitBackgroundImage: Story = {
  name: "Portrait thumbnail with background image",
  args: {
    pluginConfig: {
      cards__galleryCard__thumbnailBackgroundImage: true,
    },
    gallery: portrait as GalleryDataFragment,
  },
};

export const PortraitBackgroundStyle: Story = {
  name: "Portrait thumbnail with background style",
  args: {
    pluginConfig: {
      cards__galleryCard__thumbnailBackgroundStyle: "black",
    },
    gallery: portrait as GalleryDataFragment,
  },
};

export const SquareThumbnail: Story = {
  name: "Square thumbnail",
  args: {
    gallery: square as GalleryDataFragment,
  },
};

export const DetailsSectionButton: Story = {
  args: {
    gallery: minimalData as GalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    expect(detailsModalBtn).toBeInTheDocument();
  },
};

export const TagsSection: Story = {
  args: {
    section: "tags",
    gallery: fullData as GalleryDataFragment,
  },
};

export const TagsSectionButton: Story = {
  args: {
    gallery: fullData as GalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.getByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeInTheDocument();
  },
};

export const NoTagsSectionButton: Story = {
  args: {
    gallery: minimalData as GalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.queryByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeNull();
  },
};

export const Navigation: Story = {
  args: {
    navigation: {
      next: { disabled: false, onClick: fn() },
      prev: { disabled: false, onClick: fn() },
    },
    gallery: fullData as GalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const prevButton = canvas.queryByRole("button", {
      name: "Previous",
    });
    expect(prevButton).not.toBeDisabled();

    const nextButton = canvas.queryByRole("button", {
      name: "Next",
    });
    expect(nextButton).not.toBeDisabled();
  },
};

export const NavigationPreviousDisabled: Story = {
  args: {
    navigation: {
      next: { disabled: false, onClick: fn() },
      prev: { disabled: true, onClick: fn() },
    },
    gallery: fullData as GalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const prevButton = canvas.queryByRole("button", {
      name: "Previous",
    });
    expect(prevButton).toBeDisabled();

    const nextButton = canvas.queryByRole("button", {
      name: "Next",
    });
    expect(nextButton).not.toBeDisabled();
  },
};

export const NavigationNextDisabled: Story = {
  args: {
    navigation: {
      next: { disabled: true, onClick: fn() },
      prev: { disabled: false, onClick: fn() },
    },
    gallery: fullData as GalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const prevButton = canvas.queryByRole("button", {
      name: "Previous",
    });
    expect(prevButton).not.toBeDisabled();

    const nextButton = canvas.queryByRole("button", {
      name: "Next",
    });
    expect(nextButton).toBeDisabled();
  },
};
