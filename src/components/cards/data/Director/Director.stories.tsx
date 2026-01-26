import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Director from ".";

const stashDirectorText = "Mason";
const srDirectorText = "Director: Mason";

const meta = {
  title: "Components/Cards/Data/Director",
  component: Director,
  parameters: {
    layout: "centered",
  },
  args: {
    director: stashDirectorText,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Director>;

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

    const srDirector = canvas.getByText(srDirectorText);
    await expect(srDirector).toBeInTheDocument();
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

    const srDirector = canvas.queryByText(srDirectorText);
    await expect(srDirector).toBeNull();
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

    const srDirector = canvas.getByText(srDirectorText);
    await expect(srDirector).toBeInTheDocument();
  },
};

export const NoDataAvailable: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    director: null,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srDirector = canvas.queryByText(srDirectorText);
    await expect(srDirector).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srDirector = canvas.getByText(srDirectorText);
    await expect(srDirector).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srDirector = canvas.queryByText(srDirectorText);
    await expect(srDirector).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srDirector = canvas.getByText(srDirectorText);
    await expect(srDirector).toBeInTheDocument();
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    director: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srDirector = canvas.queryByText(srDirectorText);
    await expect(srDirector).toBeNull();
  },
};
