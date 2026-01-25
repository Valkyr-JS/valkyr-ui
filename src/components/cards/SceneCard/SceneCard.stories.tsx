import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import SceneCard from ".";

// Mock data
import filelessData from "../../../../mocks/scenes/filelessData.slim.json";
import fullData from "../../../../mocks/scenes/fullData.slim.json";
import minimalData from "../../../../mocks/scenes/minimalData.slim.json";

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
    pluginConfig: {},
    zoomBreakpoint: 1,
  },
  argTypes: {
    zoomBreakpoint: {
      control: { type: "range", min: 0, max: 3 },
    },
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

    // O count shount NOT render
    const oCount = canvas.queryByText("O Count: 2");
    await expect(oCount).toBeNull();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Rating banner should render, but not the rating icon
    const ratingBanner = canvas.getAllByText("Rating: 5 stars");
    await expect(ratingBanner).toHaveLength(1);
  },
};

export const FullDataAllEnabled: Story = {
  args: {
    pluginConfig: {
      cards__sceneCard__oCountBreakpoint: 0,
      cards__sceneCard__ratingIconBreakpoint: 0,
    },
    scene: fullData as SlimSceneDataFragment,
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

    // O count should render
    const count = canvas.getByText("O Count: 2");
    await expect(count).toBeInTheDocument();

    // Organized icon should render
    const organized = canvas.getByText("Organised");
    await expect(organized).toBeInTheDocument();

    // Rating banner AND icon should render
    const ratingBanner = canvas.getAllByText("Rating: 5 stars");
    await expect(ratingBanner).toHaveLength(2);
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
  },
};

export const FilelessData: Story = {
  args: {
    scene: filelessData as SlimSceneDataFragment,
  },
};
