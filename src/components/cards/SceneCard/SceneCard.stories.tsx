import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SceneCard } from ".";
import scene2414 from "../../../../mocks/scenes/2414.json";
import scene10613 from "../../../../mocks/scenes/10613.json";
import CardGrid from "../CardGrid";

const meta = {
  title: "Modules/Cards/SceneCard",
  component: SceneCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    zoomIndex: {
      control: "number",
    },
  },
  args: {
    zoomIndex: 1,
  },
} satisfies Meta<typeof SceneCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scene2414: Story = {
  args: {
    scene: scene2414 as SlimSceneDataFragment,
  },
};

export const Scene10613: Story = {
  args: {
    scene: scene10613 as SlimSceneDataFragment,
  },
};

export const WithCardGrid: Story = {
  args: {
    scene: scene2414 as SlimSceneDataFragment,
  },
  decorators: [
    (Story) => (
      <CardGrid>
        <Story />
      </CardGrid>
    ),
  ],
};
