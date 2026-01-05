import type { Meta, StoryObj } from "@storybook/react-vite";
import { SceneCard } from ".";
import {
  UnscrapedScene,
  WhiteYogaPantsRemasteredData,
} from "../../../../.storybook/mocks/scenes";

const meta = {
  title: "Modules/Cards/SceneCard",
  component: SceneCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    zoomIndex: 1,
  },
} satisfies Meta<typeof SceneCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Minimal: Story = {
  args: {
    scene: UnscrapedScene,
  },
};

export const WhiteYogaPantsRemastered: Story = {
  args: {
    scene: WhiteYogaPantsRemasteredData,
  },
};
