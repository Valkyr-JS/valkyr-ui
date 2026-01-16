import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import CardGrid from ".";
import GalleryCard from "../../GalleryCard";
import SceneCard from "../../SceneCard";

// Mock data
import gallery194 from "../../../../../mocks/galleries/194.json";
import gallery678 from "../../../../../mocks/galleries/678.json";
import gallery1375 from "../../../../../mocks/galleries/1375.json";
import gallery4521 from "../../../../../mocks/galleries/4521.json";
import gallery5228 from "../../../../../mocks/galleries/5228.json";
import gallery7451 from "../../../../../mocks/galleries/7451.json";
import gallery7472 from "../../../../../mocks/galleries/7472.json";
import gallery8719 from "../../../../../mocks/galleries/8719.json";
import gallery9125 from "../../../../../mocks/galleries/9125.json";
import gallery9486 from "../../../../../mocks/galleries/9486.json";
import gallery17791 from "../../../../../mocks/galleries/17791.json";
import gallery19022 from "../../../../../mocks/galleries/19022.json";
import scene121 from "../../../../../mocks/scenes/121.json";
import scene263 from "../../../../../mocks/scenes/263.json";
import scene1792 from "../../../../../mocks/scenes/1792.json";
import scene2414 from "../../../../../mocks/scenes/2414.json";
import scene5076 from "../../../../../mocks/scenes/5076.json";
import scene6343 from "../../../../../mocks/scenes/6343.json";
import scene7530 from "../../../../../mocks/scenes/7530.json";
import scene7929 from "../../../../../mocks/scenes/7929.json";
import scene7946 from "../../../../../mocks/scenes/7946.json";
import scene8356 from "../../../../../mocks/scenes/8356.json";
import scene10613 from "../../../../../mocks/scenes/10613.json";
import scene10804 from "../../../../../mocks/scenes/10804.json";

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

const SceneCards = [
  scene121,
  scene263,
  scene1792,
  scene2414,
  scene5076,
  scene6343,
  scene7530,
  scene7929,
  scene7946,
  scene8356,
  scene10613,
  scene10804,
].map((s) => (
  <SceneCard
    footer={{
      openHandler: fn(),
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
  gallery194,
  gallery678,
  gallery1375,
  gallery4521,
  gallery5228,
  gallery7451,
  gallery7472,
  gallery8719,
  gallery9125,
  gallery9486,
  gallery17791,
  gallery19022,
].map((g) => (
  <GalleryCard pluginConfig={{}} gallery={g as SlimGalleryDataFragment} />
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
