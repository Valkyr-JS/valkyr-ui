import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
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
    currentBreakpoint: {
      control: { type: "range", min: 0, max: 3 },
    },
    userBreakpoint: {
      control: { type: "range", min: -1, max: 3 },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboveZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    maxLines: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.getByText(detailsText);
    await expect(details).toBeInTheDocument();
  },
};

export const BelowZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 0,
    maxLines: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.queryByText(detailsText);
    await expect(details).toBeNull();
  },
};

export const EqualsZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 2,
    maxLines: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.getByText(detailsText);
    await expect(details).toBeInTheDocument();
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

export const NoData: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    details: null,
    maxLines: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const date = canvas.queryByText("Date");
    await expect(date).toBeNull();
  },
};

export const UserDisabled: Story = {
  args: {
    context: "card",
    maxLines: 3,
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.queryByText(detailsText);
    await expect(details).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    maxLines: 3,
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvas.getByText(detailsText);
    await expect(details).toBeInTheDocument();
  },
};
