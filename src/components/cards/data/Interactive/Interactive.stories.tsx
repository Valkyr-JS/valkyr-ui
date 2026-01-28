import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Interactive from ".";

const srInteractiveText = "Interactive";

const meta = {
  title: "Components/Cards/Data/Interactive",
  component: Interactive,
  parameters: {
    layout: "centered",
  },
  args: {
    interactive: true,
  },
  argTypes: { ...dataComponentArgTypes },
  tags: ["autodocs"],
} satisfies Meta<typeof Interactive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotInteractive: Story = {
  args: {
    context: "card",
    interactive: false,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.queryByText(srInteractiveText);
    await expect(srOrganized).toBeNull();
  },
};

export const AboveZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.getByText(srInteractiveText);
    await expect(srOrganized).toBeInTheDocument();
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

    const srOrganized = canvas.queryByText(srInteractiveText);
    await expect(srOrganized).toBeNull();
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

    const srOrganized = canvas.getByText(srInteractiveText);
    await expect(srOrganized).toBeInTheDocument();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.getByText(srInteractiveText);
    await expect(srOrganized).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.queryByText(srInteractiveText);
    await expect(srOrganized).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srOrganized = canvas.getByText(srInteractiveText);
    await expect(srOrganized).toBeInTheDocument();
  },
};
