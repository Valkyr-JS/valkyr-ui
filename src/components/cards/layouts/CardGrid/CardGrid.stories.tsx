import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CardGrid from ".";
import GalleryCard from "../../GalleryCard";
import SceneCard from "../../SceneCard";
import gallery4521 from "../../../../../mocks/galleries/4521.json";
import scene2414 from "../../../../../mocks/scenes/2414.json";
import scene10613 from "../../../../../mocks/scenes/10613.json";

const meta = {
  title: "Components/Cards/Layouts/Card grid",
  component: CardGrid,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    zoomIndex: {
      control: "number",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScenesZoom0: Story = {
  args: {
    cards: [
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
    ],
    zoomIndex: 0,
  },
  parameters: {
    layout: "padded",
  },
};

export const ScenesZoom1: Story = {
  args: {
    cards: [
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
    ],
    zoomIndex: 1,
  },
  parameters: {
    layout: "padded",
  },
};

export const ScenesZoom2: Story = {
  args: {
    cards: [
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
    ],
    zoomIndex: 2,
  },
  parameters: {
    layout: "padded",
  },
};

export const ScenesZoom3: Story = {
  args: {
    cards: [
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene10613 as SlimSceneDataFragment}
      />,
      <SceneCard
        pluginConfig={{}}
        scene={scene2414 as SlimSceneDataFragment}
      />,
    ],
    zoomIndex: 3,
  },
  parameters: {
    layout: "padded",
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
