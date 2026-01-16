import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import GalleryCard from ".";

// Mock data
import gallery4521 from "../../../../mocks/galleries/4521.json";
import gallery17791 from "../../../../mocks/galleries/17791.json";

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
    pluginConfig: {},
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

const footerProps = {
  openHandler: fn(),
  setSection: fn(),
};

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
    const date = canvas.getByText(args.gallery.date as string);
    await expect(date).toBeInTheDocument();
  },
};

export const LandscapeThumbnail: Story = {
  args: {
    gallery: gallery17791 as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Link to card modal details section should NOT render
    const detailsModalBtn = canvas.queryByRole("button", {
      name: "Details",
    });
    await expect(detailsModalBtn).toBeNull();
  },
};

export const LandscapeThumbnailWithFooter: Story = {
  args: {
    footer: footerProps,
    gallery: gallery17791 as SlimGalleryDataFragment,
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

export const PortraitThumbnail: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Link to card modal details section should NOT render
    const detailsModalBtn = canvas.queryByRole("button", {
      name: "Details",
    });
    await expect(detailsModalBtn).toBeNull();
  },
};

export const PortraitThumbnailWithFooter: Story = {
  args: {
    footer: footerProps,
    gallery: gallery4521 as SlimGalleryDataFragment,
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
