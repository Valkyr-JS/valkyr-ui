import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { SceneCardModalContent } from ".";

// Mock data
import filelessData from "../../../../mocks/scenes/filelessData.json";
import fullData from "../../../../mocks/scenes/fullData.json";
import minimalData from "../../../../mocks/scenes/minimalData.json";
import multiFile from "../../../../mocks/scenes/multiFile.json";
import portrait from "../../../../mocks/scenes/portrait.json";
import square from "../../../../mocks/scenes/square.json";

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
    titleID: "titleID",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SceneCardModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullData: Story = {
  args: {
    scene: fullData as unknown as Scene,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Date should render
    const date = canvas.getByText("Date: 11 April 2016");
    await expect(date).toBeInTheDocument();

    // Details should render
    const details = canvas.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus odio, fermentum sed egestas et, laoreet et enim. Aenean vulputate metus dolor, at placerat tortor porta non. Proin vel faucibus mauris. Mauris nec eleifend augue. In sed augue a felis aliquam gravida et aliquet risus. Nulla malesuada massa a nisi rutrum vestibulum. Suspendisse potenti. Donec laoreet tristique rhoncus. Nam porttitor mollis odio eu fermentum. Fusce magna mauris, scelerisque ac mollis eu, congue id sapien. Fusce at mauris at justo condimentum laoreet.",
    );
    await expect(details).toBeInTheDocument();

    // Duration should render
    const duration = canvas.getByText("Duration: 37 minutes 55 seconds");
    await expect(duration).toBeInTheDocument();

    // O count shount render
    const oCount = canvas.getByText("O Count: 2");
    await expect(oCount).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Rating banner should render, but not the rating icon
    const ratingBanner = canvas.getAllByText("Rating: 5 stars");
    await expect(ratingBanner).toHaveLength(1);

    // Resolution should render as text, not as an icon
    const resolution = canvas.getByText("Resolution: 1080p");
    await expect(resolution).toBeInTheDocument();
    const resolutionIcon = canvas.queryByText("Resolution: HD");
    await expect(resolutionIcon).toBeNull();

    // Studio should render
    const studio = canvas.getByText("Studio: Tushy");
    await expect(studio).toBeInTheDocument();
  },
};

export const RatingIconNotBanner: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__ratingBannerZoomIndex: -1,
      cards__galleryCard__ratingIconZoomIndex: 0,
    },
    scene: fullData as unknown as Scene,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Rating icon should render, but not the rating banner
    const ratingBanner = canvas.getAllByText("Rating: 5 stars");
    await expect(ratingBanner).toHaveLength(1);
  },
};
