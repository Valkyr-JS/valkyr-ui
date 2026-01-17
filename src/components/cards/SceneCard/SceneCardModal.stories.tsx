import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { SceneCardModalContent } from ".";
import scene2414 from "../../../../mocks/scenes/2414.json";

const meta = {
  title: "Components/Cards/Scene card modal content",
  component: SceneCardModalContent,
  decorators: [
    (Story) => (
      <div
        className={"vui-card-modal vui-scene-card-modal modal show"}
        style={{ display: "block", position: "initial" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
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
