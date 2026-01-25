import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Studio from ".";

const stashStudioText = "Tushy";
const srStudioText = "Studio: Tushy";

const meta = {
  title: "Components/Cards/Data/Studio",
  component: Studio,
  parameters: {
    layout: "centered",
  },
  args: {
    studio: {
      id: "1",
      name: "Tushy",
    },
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Studio>;

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

    const count = canvas.getByText(stashStudioText);
    await expect(count).toBeInTheDocument();

    const srCount = canvas.getByText(srStudioText);
    await expect(srCount).toBeInTheDocument();
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

    const count = canvas.queryByText(stashStudioText);
    await expect(count).toBeNull();

    const srCount = canvas.queryByText(srStudioText);
    await expect(srCount).toBeNull();
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

    const count = canvas.getByText(stashStudioText);
    await expect(count).toBeInTheDocument();

    const srCount = canvas.getByText(srStudioText);
    await expect(srCount).toBeInTheDocument();
  },
};

export const NoData: Story = {
  args: {
    context: "card",
    studio: null,
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const count = canvas.queryByText(stashStudioText);
    await expect(count).toBeNull();

    const srCount = canvas.queryByText(srStudioText);
    await expect(srCount).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const count = canvas.getByText(stashStudioText);
    await expect(count).toBeInTheDocument();

    const srCount = canvas.getByText(srStudioText);
    await expect(srCount).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const count = canvas.queryByText(stashStudioText);
    await expect(count).toBeNull();

    const srCount = canvas.queryByText(srStudioText);
    await expect(srCount).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const count = canvas.getByText(stashStudioText);
    await expect(count).toBeInTheDocument();

    const srCount = canvas.getByText(srStudioText);
    await expect(srCount).toBeInTheDocument();
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    studio: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const count = canvas.queryByText(stashStudioText);
    await expect(count).toBeNull();

    const srCount = canvas.queryByText(srStudioText);
    await expect(srCount).toBeNull();
  },
};
