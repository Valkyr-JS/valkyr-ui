import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import GalleryCard from ".";
import gallery4521 from "../../../../mocks/galleries/4521.json";
import gallery17791 from "../../../../mocks/galleries/17791.json";
import { fn } from "storybook/test";

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

export const LandscapeThumbnail: Story = {
  args: {
    gallery: gallery17791 as SlimGalleryDataFragment,
  },
};

export const LandscapeThumbnailWithFooter: Story = {
  args: {
    gallery: gallery17791 as SlimGalleryDataFragment,
    footer: footerProps,
  },
};

export const PortraitThumbnail: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
  },
};

export const PortraitThumbnailWithFooter: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
    footer: footerProps,
  },
};
