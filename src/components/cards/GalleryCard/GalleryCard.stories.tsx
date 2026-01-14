import type { Meta, StoryObj } from "@storybook/react-vite";
import GalleryCard from ".";
import gallery4521 from "../../../../mocks/galleries/4521.json";

const meta = {
  title: "Components/Cards/Gallery card",
  component: GalleryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GalleryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery4521: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
  },
};
