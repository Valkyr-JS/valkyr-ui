import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import SceneCard from ".";

// Mock data
import scene2414 from "../../../../mocks/scenes/2414.json";

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
    pluginConfig: {},
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
  setSection: fn(),
};

export const FullData: Story = {
  args: {
    scene: scene2414 as SlimSceneDataFragment,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: args.scene.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();
  },
};

export const LandscapeThumbnail: Story = {
  args: {
    scene: scene2414 as SlimSceneDataFragment,
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
    scene: scene2414 as SlimSceneDataFragment,
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
