import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { DEFAULT } from "@/constants";
import SceneCard from ".";

// Mock data
import fullData from "../../../../mocks/scenes/fullData.slim.json";
import minimalData from "../../../../mocks/scenes/minimalData.slim.json";

const pluginConfig = {
  cards__sceneCard__ratingIconBreakpoint:
    DEFAULT.CARDS.SCENE_CARD.RATING_ICON_BREAKPOINT,
};

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
    pluginConfig,
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

export const FullData: Story = {
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
