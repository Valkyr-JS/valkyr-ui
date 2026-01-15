import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CardGrid from ".";
import GalleryCard from "../../GalleryCard";
import SceneCard from "../../SceneCard";

// Mock data
import gallery4521 from "../../../../../mocks/galleries/4521.json";
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

const Cards = [
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
  <SceneCard pluginConfig={{}} scene={s as SlimSceneDataFragment} />
));

export const ScenesZoom0: Story = {
  name: "Zoom 0 - Scene cards",
  args: {
    cards: Cards,
    zoomIndex: 0,
  },
};

export const ScenesZoom1: Story = {
  name: "Zoom 1 - Scene cards",
  args: {
    cards: Cards,
    zoomIndex: 1,
  },
};

export const ScenesZoom2: Story = {
  name: "Zoom 2 - Scene cards",
  args: {
    cards: Cards,
    zoomIndex: 2,
  },
};

export const ScenesZoom3: Story = {
  name: "Zoom 3 - Scene cards",
  args: {
    cards: Cards,
    zoomIndex: 3,
  },
};

export const GalleriesZoom0: Story = {
  args: {
    cards: [
      <GalleryCard
        pluginConfig={{}}
        gallery={gallery4521 as SlimGalleryDataFragment}
      />,
    ],
    zoomIndex: 0,
  },
  parameters: {
    layout: "padded",
  },
};

export const GalleriesZoom1: Story = {
  args: {
    cards: [
      <GalleryCard
        pluginConfig={{}}
        gallery={gallery4521 as SlimGalleryDataFragment}
      />,
    ],
    zoomIndex: 1,
  },
  parameters: {
    layout: "padded",
  },
};

export const GalleriesZoom2: Story = {
  args: {
    cards: [
      <GalleryCard
        pluginConfig={{}}
        gallery={gallery4521 as SlimGalleryDataFragment}
      />,
    ],
    zoomIndex: 2,
  },
  parameters: {
    layout: "padded",
  },
};

export const GalleriesZoom3: Story = {
  args: {
    cards: [
      <GalleryCard
        pluginConfig={{}}
        gallery={gallery4521 as SlimGalleryDataFragment}
      />,
    ],
    zoomIndex: 3,
  },
  parameters: {
    layout: "padded",
  },
};
