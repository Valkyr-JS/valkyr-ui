import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { zoomIndexArgType } from "../../../../.storybook/argTypes";
import SceneCard from ".";

// Mock data
import filelessData from "../../../../mocks/scenes/filelessData.slim.json";
import fullData from "../../../../mocks/scenes/fullData.slim.json";
import interactive from "../../../../mocks/scenes/interactive.slim.json";
import minimalData from "../../../../mocks/scenes/minimalData.slim.json";
import multiFile from "../../../../mocks/scenes/multiFile.slim.json";
import portrait from "../../../../mocks/scenes/portrait.slim.json";
import square from "../../../../mocks/scenes/square.slim.json";

const meta = {
  title: "Components/Cards/Scene card",
  component: SceneCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    abbreviateCounters: false,
    footer: {
      openHandler: fn(),
      pluginConfig: {},
      setSection: fn(),
    },
    pluginConfig: {},
    selecting: false,
    zoomIndex: 1,
  },
  argTypes: {
    ...zoomIndexArgType,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SceneCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDataDefaults: Story = {
  args: {
    scene: fullData as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Aspect ratio should NOT render
    const aspectRatio = canvas.queryByText("Aspect Ratio: 16 by 9");
    await expect(aspectRatio).toBeNull();

    // Audio codec should NOT render
    const audioCodec = canvas.queryByText("Audio Codec: aac");
    await expect(audioCodec).toBeNull();

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

    // Director should NOT render
    const director = canvas.queryByText("Director: Greg Lansky");
    await expect(director).toBeNull();

    // Duration should render
    const duration = canvas.getByText("Duration: 37 minutes 55 seconds");
    await expect(duration).toBeInTheDocument();

    // File size should NOT render
    const fileSize = canvas.queryByText("File Size: 3.29 gigabytes");
    await expect(fileSize).toBeNull();

    // Frame rate should NOT render
    const frameRate = canvas.queryByText("Frame Rate: 23.98 frames per second");
    await expect(frameRate).toBeNull();

    // Interactive icon should NOT render
    const interactive = canvas.queryByText("Interactive");
    await expect(interactive).toBeNull();

    // O count should NOT render
    const oCount = canvas.queryByText("O Count: 2");
    await expect(oCount).toBeNull();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Play count should NOT render
    const playCount = canvas.queryByText("Play Count: 5");
    await expect(playCount).toBeNull();

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

    // Video codec should NOT render
    const videoCodec = canvas.queryByText("Video Codec: h264");
    await expect(videoCodec).toBeNull();
  },
};

export const FullDataAllEnabled: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__aspectRatioZoomIndex: 0,
      cards__sceneCard__audioCodecZoomIndex: 0,
      cards__sceneCard__bitRateZoomIndex: 0,
      cards__sceneCard__directorZoomIndex: 0,
      cards__sceneCard__fileSizeZoomIndex: 0,
      cards__sceneCard__frameRateZoomIndex: 0,
      cards__sceneCard__interactiveZoomIndex: 0,
      cards__sceneCard__oCountZoomIndex: 0,
      cards__sceneCard__playCountZoomIndex: 0,
      cards__sceneCard__ratingIconZoomIndex: 0,
      cards__sceneCard__videoCodecZoomIndex: 0,
    },
    scene: fullData as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Aspect ratio should render
    const aspectRatio = canvas.getByText("Aspect Ratio: 16 by 9");
    await expect(aspectRatio).toBeInTheDocument();

    // Audio codec should render
    const audioCodec = canvas.getByText("Audio Codec: aac");
    await expect(audioCodec).toBeInTheDocument();

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

    // File size icon should render
    const fileSize = canvas.getByText("File Size: 3.29 gigabytes");
    await expect(fileSize).toBeInTheDocument();

    // Frame rate should render
    const frameRate = canvas.getByText("Frame Rate: 23.98 frames per second");
    await expect(frameRate).toBeInTheDocument();

    // Interactive icon should NOT render as this scene isn't interactive.
    const interactive = canvas.queryByText("Interactive");
    await expect(interactive).toBeNull();

    // O count should render
    const oCount = canvas.getByText("O Count: 2");
    await expect(oCount).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Play count should render
    const playCount = canvas.getByText("Play Count: 5");
    await expect(playCount).toBeInTheDocument();

    // Rating banner AND icon should render
    const ratingBanner = canvas.getAllByText("Rating: 5 stars");
    await expect(ratingBanner).toHaveLength(2);

    // Resolution should render as text, not as an icon
    const resolution = canvas.getByText("Resolution: 1080p");
    await expect(resolution).toBeInTheDocument();
    const resolutionIcon = canvas.queryByText("Resolution: HD");
    await expect(resolutionIcon).toBeNull();

    // Studio should render
    const studio = canvas.getByText("Studio: Tushy");
    await expect(studio).toBeInTheDocument();

    // Video codec should render
    const videoCodec = canvas.getByText("Video Codec: h264");
    await expect(videoCodec).toBeInTheDocument();
  },
};

export const MinimalData: Story = {
  args: {
    scene: minimalData as SlimSceneDataFragment,
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
    scene: filelessData as SlimSceneDataFragment,
  },
};

export const MultiFile: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__aspectRatioZoomIndex: 0,
      cards__sceneCard__audioCodecZoomIndex: 0,
      cards__sceneCard__bitRateZoomIndex: 0,
      cards__sceneCard__fileSizeZoomIndex: 0,
      cards__sceneCard__frameRateZoomIndex: 0,
      cards__sceneCard__videoCodecZoomIndex: 0,
    },
    scene: multiFile as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Aspect ratio
    const primaryAspectRatio = canvas.getByText("Aspect Ratio: 16 by 9");
    await expect(primaryAspectRatio).toBeInTheDocument();
    const secondaryAspectRatio = canvas.queryByText("Aspect Ratio: 160 by 9");
    await expect(secondaryAspectRatio).toBeNull();

    // Audio codec should render
    const primaryAudioCodec = canvas.getByText("Audio Codec: aac");
    await expect(primaryAudioCodec).toBeInTheDocument();
    const secondaryAudioCodec = canvas.queryByText("Audio Codec: mp3");
    await expect(secondaryAudioCodec).toBeNull();

    // Bit rate
    const primaryBitRate = canvas.getByText(
      "Bit Rate: 8.6 megabits per second",
    );
    await expect(primaryBitRate).toBeInTheDocument();
    const secondaryBitRate = canvas.queryByText(
      "Bit Rate: 0.86 megabits per second",
    );
    await expect(secondaryBitRate).toBeNull();

    // Duration
    const primaryDuration = canvas.getByText("Duration: 29 minutes 3 seconds");
    await expect(primaryDuration).toBeInTheDocument();
    const secondaryDuration = canvas.queryByText(
      "Duration: 2 minutes 54 seconds",
    );
    await expect(secondaryDuration).toBeNull();

    // File size
    const primaryFileSize = canvas.getByText("File Size: 1.75 gigabytes");
    await expect(primaryFileSize).toBeInTheDocument();
    const secondaryFileSize = canvas.queryByText("File Size: 17.89 megabytes");
    await expect(secondaryFileSize).toBeNull();

    // Frame rate
    const primaryFrameRate = canvas.getByText(
      "Frame Rate: 29.97 frames per second",
    );
    await expect(primaryFrameRate).toBeInTheDocument();
    const secondaryFrameRate = canvas.queryByText(
      "Frame Rate: 2.99 frames per second",
    );
    await expect(secondaryFrameRate).toBeNull();

    // Resolution
    const primaryRes = canvas.getByText("Resolution: 1080p");
    await expect(primaryRes).toBeInTheDocument();
    const secondaryRes = canvas.queryByText("Resolution: 108p");
    await expect(secondaryRes).toBeNull();

    // Video codec should render
    const primaryVideoCodec = canvas.getByText("Video Codec: h264");
    await expect(primaryVideoCodec).toBeInTheDocument();
    const secondaryVideoCodec = canvas.queryByText("Video Codec: mpeg2");
    await expect(secondaryVideoCodec).toBeNull();
  },
};

export const PlayPreviewOnHover: Story = {
  args: {
    scene: fullData as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Get the preview
    const card = canvas.getByTestId("grid-card");
    const video = canvas.getByTestId<HTMLVideoElement>("scene-card-preview");

    // Trigger a hover event
    await userEvent.hover(card);
    expect(video.paused).toBeFalsy();

    // End a hover event
    await userEvent.unhover(card);
    expect(video.paused).toBeTruthy();
  },
};

export const Interactive: Story = {
  args: {
    pluginConfig: { cards__sceneCard__interactiveZoomIndex: 0 },
    scene: interactive as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Aspect ratio should render
    const aspectRatio = canvas.getByText("Interactive");
    await expect(aspectRatio).toBeInTheDocument();
  },
};

export const PortraitBackgroundImage: Story = {
  name: "Portrait thumbnail with background image",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundImage: true,
    },
    scene: portrait as SlimSceneDataFragment,
  },
};

export const PortraitBackgroundStyle: Story = {
  name: "Portrait thumbnail with background style",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundStyle: "black",
    },
    scene: portrait as SlimSceneDataFragment,
  },
};

export const SquareBackgroundImage: Story = {
  name: "Square thumbnail with background image",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundImage: true,
    },
    scene: square as SlimSceneDataFragment,
  },
};

export const SquareBackgroundStyle: Story = {
  name: "Square thumbnail with background style",
  args: {
    pluginConfig: {
      cards__sceneCard__thumbnailBackgroundStyle: "black",
    },
    scene: square as SlimSceneDataFragment,
  },
};

export const DetailsModalButton: Story = {
  args: {
    scene: square as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    expect(detailsModalBtn).toBeInTheDocument();
  },
};

export const TagsModalButton: Story = {
  args: {
    scene: fullData as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.getByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeInTheDocument();
  },
};

export const NoTagsModalButton: Story = {
  args: {
    scene: square as SlimSceneDataFragment,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsModalBtn = canvas.queryByRole("button", {
      name: "Tags",
    });
    expect(tagsModalBtn).toBeNull();
  },
};

export const DisableModalsWhenSelecting: Story = {
  args: {
    scene: fullData as SlimSceneDataFragment,
    selecting: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const detailsModalBtn = canvas.getByRole("button", {
      name: "Details",
    });
    const tagsModalBtn = canvas.getByRole("button", {
      name: "Tags",
    });

    expect(detailsModalBtn).toBeDisabled();
    expect(tagsModalBtn).toBeDisabled();
  },
};
