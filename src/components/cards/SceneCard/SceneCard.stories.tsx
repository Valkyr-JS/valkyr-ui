import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import SceneCard from ".";

// Mock data
import scene2414 from "../../../../mocks/scenes/2414.json";
import scene6439 from "../../../../mocks/scenes/6439.json";

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

export const FullData: Story = {
  args: {
    scene: scene2414 as SlimSceneDataFragment,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: "Studio: " + args.scene.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 20 September 2020");
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
    scene: scene2414 as SlimSceneDataFragment,
  },
};

export const PortraitThumbnail: Story = {
  args: {
    scene: scene6439 as SlimSceneDataFragment,
  },
};

export const WithThumbnailBackgroundImage: Story = {
  args: {
    scene: scene6439 as SlimSceneDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__sceneCard__thumbnailBackgroundImage: true,
    },
  },
};

export const WithThumbnailBackgroundStyle: Story = {
  args: {
    scene: scene6439 as SlimSceneDataFragment,
    pluginConfig: {
      ...pluginConfig,
      cards__sceneCard__thumbnailBackgroundStyle: "black",
    },
  },
};
