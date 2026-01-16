import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { GalleryCardModalContent } from ".";
import gallery4521 from "../../../../mocks/galleries/4521.json";
import { WithStaticCardModal } from "../../../../.storybook/decorators";

const meta = {
  title: "Components/Cards/Gallery card modal content",
  component: GalleryCardModalContent,
  decorators: [WithStaticCardModal],
  parameters: {
    layout: "centered",
  },
  args: {
    closeHandler: fn(),
    pluginConfig: {},
    section: "details",
    setSection: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GalleryCardModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSettings: Story = {
  args: {
    gallery: gallery4521 as SlimGalleryDataFragment,
    titleID: "gallery4521Modal",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: "Studio: " + args.gallery.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 3 March 2016");
    await expect(date).toBeInTheDocument();
  },
};
