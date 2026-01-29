import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import PerformerList from ".";
import fullData from "../../../../../mocks/galleries/fullData.slim.json";

const meta = {
  title: "Components/Cards/Data/PerformerList",
  component: PerformerList,
  parameters: {
    layout: "centered",
  },
  args: {
    performers: fullData.performers,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PerformerList>;

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

    const performerA = canvas.getByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.getByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();
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

    const performerA = canvas.queryByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.queryByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeNull();
    await expect(performerB).toBeNull();
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

    const performerA = canvas.getByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.getByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();
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

    const performerA = canvas.queryByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.queryByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeNull();
    await expect(performerB).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performerA = canvas.getByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.getByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performerA = canvas.queryByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.queryByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeNull();
    await expect(performerB).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performerA = canvas.getByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.getByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    photographer: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performerA = canvas.queryByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.queryByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeNull();
    await expect(performerB).toBeNull();
  },
};
