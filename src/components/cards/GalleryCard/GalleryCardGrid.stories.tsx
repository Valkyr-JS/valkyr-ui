import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { mergeConfig } from "@/helpers";
import CardGrid from "../layouts/CardGrid";
import { zoomIndexArgType } from "../../../../.storybook/argTypes";
import GalleryCard from "../GalleryCard";

// Mock data
import filelessData from "../../../../mocks/galleries/filelessData.slim.json";
import fullData from "../../../../mocks/galleries/fullData.slim.json";
import minimalData from "../../../../mocks/galleries/minimalData.slim.json";
import portrait from "../../../../mocks/galleries/portrait.slim.json";
import square from "../../../../mocks/galleries/square.slim.json";

const meta = {
  title: "Components/Cards/Gallery card grid",
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

const GalleryCards = [
  fullData,
  minimalData,
  filelessData,
  portrait,
  square,
].map((g) => (
  <GalleryCard
    abbreviateCounters={false}
    footer={{
      openHandler: fn(),
      pluginConfig: mergeConfig({}),
      setSection: fn(),
    }}
    pluginConfig={mergeConfig({})}
    gallery={g as SlimGalleryDataFragment}
  />
));

export const ScenesZoom0: Story = {
  name: "Zoom 0 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 0,
  },
};

export const ScenesZoom1: Story = {
  name: "Zoom 1 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 1,
  },
};

export const ScenesZoom2: Story = {
  name: "Zoom 2 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 2,
  },
};

export const ScenesZoom3: Story = {
  name: "Zoom 3 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 3,
  },
};
