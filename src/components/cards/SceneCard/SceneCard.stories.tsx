import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import SceneCard from ".";

// Mock data
import landscapeCover from "../../../../mocks/scenes/landscapeCover.json";
import portraitCover from "../../../../mocks/scenes/portraitCover.json";

const pluginConfig = {
  cards__sceneCard__ratingIconBreakpoint: 0 as StashCardGridZoom,
};

const meta = {
  title: "Components/Cards/Scene card",
  component: SceneCard,
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
} satisfies Meta<typeof SceneCard>;

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
    scene: portraitCover as unknown as SlimSceneDataFragment,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: "Studio: " + args.scene.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 20 July 2020");
    await expect(date).toBeInTheDocument();
  },
};

export const LandscapeThumbnail: Story = {
  args: {
    scene: landscapeCover as unknown as SlimSceneDataFragment,
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
    scene: landscapeCover as unknown as SlimSceneDataFragment,
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
    scene: portraitCover as unknown as SlimSceneDataFragment,
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
    scene: portraitCover as unknown as SlimSceneDataFragment,
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

export const PortraitThumbnailWithThumbnailBackgroundImage: Story = {
  args: {
    scene: portraitCover as unknown as SlimSceneDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__sceneCard__thumbnailBackgroundImage: true,
    },
  },
};

export const PortraitThumbnailWithThumbnailBackgroundStyle: Story = {
  args: {
    scene: portraitCover as unknown as SlimSceneDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__sceneCard__thumbnailBackgroundStyle: "black",
    },
  },
};
