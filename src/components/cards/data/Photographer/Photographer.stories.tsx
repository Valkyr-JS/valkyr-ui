import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Photographer from ".";

const stashPhotographerText = "Petter Hegre";
const srPhotographerText = "Photographer: Petter Hegre";

const meta = {
  title: "Components/Cards/Data/Photographer",
  component: Photographer,
  parameters: {
    layout: "centered",
  },
  args: {
    photographer: stashPhotographerText,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Photographer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboveZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.getByText(srPhotographerText);
    await expect(srPhotographer).toBeInTheDocument();
  },
};

export const BelowZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 0,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.queryByText(srPhotographerText);
    await expect(srPhotographer).toBeNull();
  },
};

export const EqualsZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 2,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.getByText(srPhotographerText);
    await expect(srPhotographer).toBeInTheDocument();
  },
};

export const NoDataAvailable: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    photographer: null,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.queryByText(srPhotographerText);
    await expect(srPhotographer).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.getByText(srPhotographerText);
    await expect(srPhotographer).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.queryByText(srPhotographerText);
    await expect(srPhotographer).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.getByText(srPhotographerText);
    await expect(srPhotographer).toBeInTheDocument();
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    photographer: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srPhotographer = canvas.queryByText(srPhotographerText);
    await expect(srPhotographer).toBeNull();
  },
};
