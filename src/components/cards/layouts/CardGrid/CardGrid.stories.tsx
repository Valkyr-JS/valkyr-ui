import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import CardGrid from ".";
import GalleryCard from "../../GalleryCard";
import SceneCard from "../../SceneCard";

// Mock data
import landscapeThumbnail from "../../../../../mocks/galleries/landscapeThumbnail.json";
import portraitThumbnail from "../../../../../mocks/galleries/portraitThumbnail.json";
import squareThumbnail from "../../../../../mocks/galleries/squareThumbnail.json";
import landscapeCover from "../../../../../mocks/scenes/landscapeCover.json";
import portraitCover from "../../../../../mocks/scenes/portraitCover.json";
import squareCover from "../../../../../mocks/scenes/squareCover.json";

const meta = {
  title: "Components/Cards/Layouts/Card grid",
  component: CardGrid,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    zoomIndex: {
      control: { type: "range", min: 0, max: 3 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const SceneCards = [landscapeCover, portraitCover, squareCover].map((s) => (
  <SceneCard
    footer={{
      openHandler: fn(),
      pluginConfig: {},
      setSection: fn(),
    }}
    pluginConfig={{}}
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

const GalleryCards = [
  landscapeThumbnail,
  portraitThumbnail,
  squareThumbnail,
].map((g) => (
  <GalleryCard
    footer={{
      openHandler: fn(),
      pluginConfig: {},
      setSection: fn(),
    }}
    pluginConfig={{}}
    gallery={g as unknown as SlimGalleryDataFragment}
  />
));

export const GalleriesZoom0: Story = {
  name: "Zoom 0 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 0,
  },
};

export const GalleriesZoom1: Story = {
  name: "Zoom 1 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 1,
  },
};

export const GalleriesZoom2: Story = {
  name: "Zoom 2 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 2,
  },
};

export const GalleriesZoom3: Story = {
  name: "Zoom 3 - Gallery cards",
  args: {
    cards: GalleryCards,
    zoomIndex: 3,
  },
};
