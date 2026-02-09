import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { mergeConfig } from "@/helpers";
import CardGrid from "../layouts/CardGrid";
import { zoomIndexArgType } from "../../../../.storybook/argTypes";
import SceneCard from "../SceneCard";

// Mock data
import filelessData from "../../../../mocks/scenes/filelessData.slim.json";
import fullData from "../../../../mocks/scenes/fullData.slim.json";
import interactive from "../../../../mocks/scenes/interactive.slim.json";
import minimalData from "../../../../mocks/scenes/minimalData.slim.json";
import multiFile from "../../../../mocks/scenes/multiFile.slim.json";
import portrait from "../../../../mocks/scenes/portrait.slim.json";
import square from "../../../../mocks/scenes/square.slim.json";

const meta = {
  title: "Components/Cards/Scene card grid",
  component: CardGrid,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    ...zoomIndexArgType,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const SceneCards = [
  fullData,
  interactive,
  minimalData,
  multiFile,
  filelessData,
  portrait,
  square,
].map((s) => (
  <SceneCard
    abbreviateCounters={false}
    footer={{
      openHandler: fn(),
      pluginConfig: mergeConfig({}),
      setSection: fn(),
    }}
    pluginConfig={mergeConfig({})}
    scene={s as SlimSceneDataFragment}
  />
));

export const ScenesZoom0: Story = {
  name: "Zoom 0 - Scene cards",
  args: {
    cards: SceneCards,
    zoomIndex: 0,
  },
};

export const ScenesZoom1: Story = {
  name: "Zoom 1 - Scene cards",
  args: {
    cards: SceneCards,
    zoomIndex: 1,
  },
};

export const ScenesZoom2: Story = {
  name: "Zoom 2 - Scene cards",
  args: {
    cards: SceneCards,
    zoomIndex: 2,
  },
};

export const ScenesZoom3: Story = {
  name: "Zoom 3 - Scene cards",
  args: {
    cards: SceneCards,
    zoomIndex: 3,
  },
};
