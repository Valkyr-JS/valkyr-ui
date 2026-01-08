import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CardModal from ".";
import scene2414 from "../../../../mocks/scenes/2414.json";
import { SceneCardThumbnail } from "../SceneCard";

const meta = {
  title: "Modules/Cards/CardModal",
  component: CardModal,
  parameters: {
    layout: "centered",
  },
  args: {
    link: "#",
    show: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Scene2414Thumbnail = () => (
  <SceneCardThumbnail link="#" src={scene2414.paths.screenshot} />
);

export const Scene2414: Story = {
  args: {
    thumbnail: <Scene2414Thumbnail />,
    title: scene2414.title,
  },
};
