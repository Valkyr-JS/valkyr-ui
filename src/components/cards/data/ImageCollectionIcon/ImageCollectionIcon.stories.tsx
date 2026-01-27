import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import ImageCollectionIcon from ".";

const srCollectionText = "Image collection";

const meta = {
  title: "Components/Cards/Data/Image collection icon",
  component: ImageCollectionIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    isCollection: true,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageCollectionIcon>;

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

    const srCollection = canvas.getByText(srCollectionText);
    await expect(srCollection).toBeInTheDocument();
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

    const srCollection = canvas.queryByText(srCollectionText);
    await expect(srCollection).toBeNull();
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

    const srCollection = canvas.getByText(srCollectionText);
    await expect(srCollection).toBeInTheDocument();
  },
};

export const FalseValue: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    isCollection: false,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCollection = canvas.queryByText(srCollectionText);
    await expect(srCollection).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCollection = canvas.getByText(srCollectionText);
    await expect(srCollection).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCollection = canvas.queryByText(srCollectionText);
    await expect(srCollection).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCollection = canvas.getByText(srCollectionText);
    await expect(srCollection).toBeInTheDocument();
  },
};

export const ModalContextFalseValue: Story = {
  args: {
    context: "modal",
    isCollection: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const srCollection = canvas.queryByText(srCollectionText);
    await expect(srCollection).toBeNull();
  },
};
