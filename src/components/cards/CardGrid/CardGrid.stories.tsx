import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import scene2414 from "../../../../mocks/scenes/2414.json";
import scene10613 from "../../../../mocks/scenes/10613.json";
import CardGrid from ".";
import SceneCard from "../SceneCard";

const meta = {
  title: "Modules/Cards/CardGrid",
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

export const Zoom0: Story = {
  args: {
    cards: [
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
    ],
    zoomIndex: 0,
  },
  parameters: {
    layout: "padded",
  },
};

export const Zoom1: Story = {
  args: {
    cards: [
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
    ],
    zoomIndex: 1,
  },
  parameters: {
    layout: "padded",
  },
};

export const Zoom2: Story = {
  args: {
    cards: [
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
    ],
    zoomIndex: 2,
  },
  parameters: {
    layout: "padded",
  },
};

export const Zoom3: Story = {
  args: {
    cards: [
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
      <SceneCard scene={scene10613 as SlimSceneDataFragment} />,
      <SceneCard scene={scene2414 as SlimSceneDataFragment} />,
    ],
    zoomIndex: 3,
  },
  parameters: {
    layout: "padded",
  },
};
