import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Details from ".";

const detailsText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at tincidunt diam. Etiam quis odio egestas, vehicula urna a, facilisis metus. Pellentesque sit amet est vitae nisi vestibulum finibus sed et sem. Etiam vel porttitor massa, quis dictum libero. Aliquam erat volutpat. Ut in vehicula ante, ut fermentum purus. Integer non varius velit. Maecenas in arcu leo. Phasellus accumsan volutpat condimentum. Nulla facilisi. Nulla varius orci ante. Cras aliquam volutpat urna sed convallis. Ut a condimentum quam.";

const meta = {
  title: "Components/Cards/Data/Details",
  component: Details,
  parameters: {
    layout: "centered",
  },
  args: {
    details: detailsText,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MaxLines3: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    maxLines: 3,
    userZoomIndex: 2,
  },
};

export const MaxLines1: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    maxLines: 1,
    userZoomIndex: 2,
  },
};

export const MaxLines0: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    maxLines: 0,
    userZoomIndex: 2,
  },
};

export const AboveZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    maxLines: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.getByText(detailsText);
    await expect(details).toBeInTheDocument();
  },
};

export const BelowZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 0,
    maxLines: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.queryByText(detailsText);
    await expect(details).toBeNull();
  },
};

export const EqualsZoomIndex: Story = {
  args: {
    context: "card",
    currentZoomIndex: 2,
    maxLines: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.getByText(detailsText);
    await expect(details).toBeInTheDocument();
  },
};

export const NoDataAvailable: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    details: null,
    maxLines: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.queryByText("Date");
    await expect(date).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    maxLines: 3,
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.getByText(detailsText);
    await expect(details).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    maxLines: 3,
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.queryByText(detailsText);
    await expect(details).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.getByText(detailsText);
    await expect(details).toBeInTheDocument();
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    details: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.queryByText(detailsText);
    await expect(details).toBeNull();
  },
};
