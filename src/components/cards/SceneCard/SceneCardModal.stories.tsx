import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { SceneCardModalContent } from ".";
import scene2414 from "../../../../mocks/scenes/2414.json";
import { WithStaticCardModal } from "../../../../.storybook/decorators";

const meta = {
  title: "Components/Cards/Scene card modal content",
  component: SceneCardModalContent,
  decorators: [WithStaticCardModal],
  parameters: {
    layout: "centered",
  },
  args: {
    closeHandler: fn(),
    section: "details",
    setSection: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SceneCardModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSettings: Story = {
  args: {
    scene: scene2414 as SlimSceneDataFragment,
    titleID: "scene2414Modal",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Studio link should render
    const studioLink = canvas.getByRole("link", {
      name: "Studio: " + args.scene.studio?.name,
    });
    await expect(studioLink).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 20 September 2020");
    await expect(date).toBeInTheDocument();
  },
};
