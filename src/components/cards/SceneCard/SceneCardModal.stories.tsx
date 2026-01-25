import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { SceneCardModalContent } from ".";

// Mock data
import landscapeCover from "../../../../mocks/scenes/landscapeCover.json";
import portrait from "../../../../mocks/scenes/portrait.slim.json";

const meta = {
  title: "Components/Cards/Scene card modal content",
  component: SceneCardModalContent,
  decorators: [
    (Story) => (
      <div
        className={"vui-card-modal vui-scene-card-modal modal show"}
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
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SceneCardModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSettings: Story = {
  args: {
    scene: portrait as unknown as Scene,
    titleID: "scene2414Modal",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: "Studio: " + args.scene.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 19 May 2020");
    await expect(date).toBeInTheDocument();
  },
};

export const TagSection: Story = {
  args: {
    scene: landscapeCover as unknown as Scene,
    section: "tags",
    titleID: "scene2414Modal",
  },
};

export const PortraitThumbnail: Story = {
  args: {
    scene: portrait as unknown as Scene,
    titleID: "scene6439Modal",
  },
};

export const PortraitThumbnailWithThumbnailBackgroundImage: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundImage: true,
    },
    scene: portrait as unknown as Scene,
    titleID: "scene6439Modal",
  },
};

export const PortraitThumbnailWithThumbnailBackgroundStyle: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundStyle: "black",
    },
    scene: portrait as unknown as Scene,
    titleID: "scene6439Modal",
  },
};
