import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CardModal from ".";
import { SceneCardThumbnail } from "../SceneCard";
import gallery4521 from "../../../../mocks/galleries/4521.json";
import scene2414 from "../../../../mocks/scenes/2414.json";
import { createGalleryCardID, GalleryCardThumbnail } from "../GalleryCard";
import { fn } from "storybook/test";

const meta = {
  title: "Modules/Cards/CardModal",
  component: CardModal,
  parameters: {
    layout: "centered",
  },
  args: {
    closeHandler: fn(),
    link: "#",
    show: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const gallery4521ID = createGalleryCardID(gallery4521.id);
const Gallery4521Thumbnail = () => (
  <GalleryCardThumbnail
    id={gallery4521ID}
    link="#"
    src={gallery4521.paths.cover}
  />
);

export const Gallery4521: Story = {
  args: {
    thumbnail: <Gallery4521Thumbnail />,
    title: gallery4521.title,
    titleID: gallery4521ID,
  },
};

const scene2414ID = createGalleryCardID(scene2414.id);
const Scene2414Thumbnail = () => (
  <SceneCardThumbnail
    id={scene2414ID}
    link="#"
    src={scene2414.paths.screenshot}
  />
);

export const Scene2414: Story = {
  args: {
    thumbnail: <Scene2414Thumbnail />,
    title: scene2414.title,
    titleID: scene2414ID,
  },
};
