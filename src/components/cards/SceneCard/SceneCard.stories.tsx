import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import SceneCard from ".";
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
  },
  argTypes: {
    zoomBreakpoint: {
      control: "number",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SceneCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSettingsWithZoom: Story = {
  args: {
    scene: scene2414 as SlimSceneDataFragment,
    zoomBreakpoint: 1,
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

export const DefaultSettingsWithoutZoom: Story = {
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
