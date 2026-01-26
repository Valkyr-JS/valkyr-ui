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

export const FullDataDefaults: Story = {
  args: {
    scene: fullData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Aspect ratio should NOT render
    const aspectRatio = canvas.queryByText("Aspect Ratio: 16 by 9");
    await expect(aspectRatio).toBeNull();

    // Bit rate should NOT render
    const bitRate = canvas.queryByText("Bit Rate: 12.42 megabits per second");
    await expect(bitRate).toBeNull();

    // Date should render
    const date = canvas.getByText("Date: 11 April 2016");
    await expect(date).toBeInTheDocument();

    // Details should render
    const details = canvas.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus odio, fermentum sed egestas et, laoreet et enim. Aenean vulputate metus dolor, at placerat tortor porta non. Proin vel faucibus mauris. Mauris nec eleifend augue. In sed augue a felis aliquam gravida et aliquet risus. Nulla malesuada massa a nisi rutrum vestibulum. Suspendisse potenti. Donec laoreet tristique rhoncus. Nam porttitor mollis odio eu fermentum. Fusce magna mauris, scelerisque ac mollis eu, congue id sapien. Fusce at mauris at justo condimentum laoreet.",
    );
    await expect(details).toBeInTheDocument();

    // Director should render
    const director = canvas.getByText("Director: Greg Lansky");
    await expect(director).toBeInTheDocument();

    // Duration should render
    const duration = canvas.getByText("Duration: 37 minutes 55 seconds");
    await expect(duration).toBeInTheDocument();

    // O count should render
    const oCount = canvas.getByText("O Count: 2");
    await expect(oCount).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Play count should render
    const playCount = canvas.getByText("Play Count: 5");
    await expect(playCount).toBeInTheDocument();

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

export const FullDataAllEnabled: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__aspectRatioZoomIndex: 0,
      cards__sceneCard__bitRateZoomIndex: 0,
    },
    scene: fullData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Aspect ratio should render
    const aspectRatio = canvas.getByText("Aspect Ratio: 16 by 9");
    await expect(aspectRatio).toBeInTheDocument();

    // Bit rate should render
    const bitRate = canvas.getByText("Bit Rate: 12.42 megabits per second");
    await expect(bitRate).toBeInTheDocument();

    // Date should render
    const date = canvas.getByText("Date: 11 April 2016");
    await expect(date).toBeInTheDocument();

    // Details should render
    const details = canvas.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus odio, fermentum sed egestas et, laoreet et enim. Aenean vulputate metus dolor, at placerat tortor porta non. Proin vel faucibus mauris. Mauris nec eleifend augue. In sed augue a felis aliquam gravida et aliquet risus. Nulla malesuada massa a nisi rutrum vestibulum. Suspendisse potenti. Donec laoreet tristique rhoncus. Nam porttitor mollis odio eu fermentum. Fusce magna mauris, scelerisque ac mollis eu, congue id sapien. Fusce at mauris at justo condimentum laoreet.",
    );
    await expect(details).toBeInTheDocument();

    // Director should render
    const director = canvas.getByText("Director: Greg Lansky");
    await expect(director).toBeInTheDocument();

    // Duration should render
    const duration = canvas.getByText("Duration: 37 minutes 55 seconds");
    await expect(duration).toBeInTheDocument();

    // O count should render
    const oCount = canvas.getByText("O Count: 2");
    await expect(oCount).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Play count should render
    const playCount = canvas.getByText("Play Count: 5");
    await expect(playCount).toBeInTheDocument();

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
      cards__sceneCard__ratingIconZoomIndex: 0,
    },
    scene: fullData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Rating icon should render, but not the rating banner
    const ratingBanner = canvas.getAllByText("Rating: 5 stars");
    await expect(ratingBanner).toHaveLength(1);
  },
};

export const MinimalData: Story = {
  args: {
    scene: minimalData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Duration should render
    const duration = canvas.getByText("Duration: 42 minutes 51 seconds");
    await expect(duration).toBeInTheDocument();

    // Resolution should render as text, not as an icon
    const resolution = canvas.getByText("Resolution: 540p");
    await expect(resolution).toBeInTheDocument();
    const resolutionIcon = canvas.queryByText("Resolution: SD");
    await expect(resolutionIcon).toBeNull();
  },
};

export const FilelessData: Story = {
  args: {
    scene: filelessData as SceneDataFragment,
  },
};

export const MultiFile: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__aspectRatioZoomIndex: 0,
      cards__sceneCard__bitRateZoomIndex: 0,
    },
    scene: multiFile as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Aspect ratio
    const primaryAspectRatio = canvas.getByText("Aspect Ratio: 16 by 9");
    await expect(primaryAspectRatio).toBeInTheDocument();
    const secondaryAspectRatio = canvas.queryByText("Aspect Ratio: 27 by 16");
    await expect(secondaryAspectRatio).toBeNull();

    // Bit rate
    const primaryBitRate = canvas.getByText(
      "Bit Rate: 8.6 megabits per second",
    );
    await expect(primaryBitRate).toBeInTheDocument();
    const secondaryBitRate = canvas.queryByText(
      "Bit Rate: 0.86 megabits per second",
    );
    await expect(secondaryBitRate).toBeNull();

    // Resolution
    const primaryRes = canvas.getByText("Resolution: 1080p");
    await expect(primaryRes).toBeInTheDocument();
    const secondaryRes = canvas.queryByText("Resolution: 640p");
    await expect(secondaryRes).toBeNull();
  },
};

export const PortraitBackgroundImage: Story = {
  name: "Portrait thumbnail with background image",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundImage: true,
    },
    scene: portrait as SceneDataFragment,
  },
};

export const PortraitBackgroundStyle: Story = {
  name: "Portrait thumbnail with background style",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundStyle: "black",
    },
    scene: portrait as SceneDataFragment,
  },
};

export const SquareBackgroundImage: Story = {
  name: "Square thumbnail with background image",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundImage: true,
    },
    scene: square as SceneDataFragment,
  },
};

export const SquareBackgroundStyle: Story = {
  name: "Square thumbnail with background style",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundStyle: "black",
    },
    scene: square as SceneDataFragment,
  },
};

export const DetailsSectionButton: Story = {
  args: {
    scene: square as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    expect(detailsModalBtn).toBeInTheDocument();
  },
};

export const TagsSection: Story = {
  args: {
    section: "tags",
    scene: fullData as SceneDataFragment,
  },
};

export const TagsSectionButton: Story = {
  args: {
    scene: fullData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.getByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeInTheDocument();
  },
};

export const NoTagsSectionButton: Story = {
  args: {
    scene: square as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.queryByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeNull();
  },
};

export const Navigation: Story = {
  args: {
    navigation: {
      next: { disabled: false, onClick: fn() },
      prev: { disabled: false, onClick: fn() },
    },
    scene: fullData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const prevButton = canvas.queryByRole("button", {
      name: "Previous",
    });
    expect(prevButton).not.toBeDisabled();

    const nextButton = canvas.queryByRole("button", {
      name: "Next",
    });
    expect(nextButton).not.toBeDisabled();
  },
};

export const NavigationPreviousDisabled: Story = {
  args: {
    navigation: {
      next: { disabled: false, onClick: fn() },
      prev: { disabled: true, onClick: fn() },
    },
    scene: fullData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const prevButton = canvas.queryByRole("button", {
      name: "Previous",
    });
    expect(prevButton).toBeDisabled();

    const nextButton = canvas.queryByRole("button", {
      name: "Next",
    });
    expect(nextButton).not.toBeDisabled();
  },
};

export const NavigationNextDisabled: Story = {
  args: {
    navigation: {
      next: { disabled: true, onClick: fn() },
      prev: { disabled: false, onClick: fn() },
    },
    scene: fullData as SceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const prevButton = canvas.queryByRole("button", {
      name: "Previous",
    });
    expect(prevButton).not.toBeDisabled();

    const nextButton = canvas.queryByRole("button", {
      name: "Next",
    });
    expect(nextButton).toBeDisabled();
  },
};
