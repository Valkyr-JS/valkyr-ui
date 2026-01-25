import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import Duration from ".";

const stashDurationText = "37:55";
const srDurationText = "Duration: 37 minutes 55 seconds";

const meta = {
  title: "Components/Cards/Data/Duration",
  component: Duration,
  parameters: {
    layout: "centered",
  },
  args: {
    duration: 2275.88,
    timestampPadding: false,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Duration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneHour: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    duration: 3600,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText("1:00:00");
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText("Duration: 1 hour");
    await expect(srDuration).toBeInTheDocument();
  },
};

export const OneMinute: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    duration: 60,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText("1:00");
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText("Duration: 1 minute");
    await expect(srDuration).toBeInTheDocument();
  },
};

export const OneSecond: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    duration: 1,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText("0:01");
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText("Duration: 1 second");
    await expect(srDuration).toBeInTheDocument();
  },
};

export const HoursAndMinutes: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    duration: 9600,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText("2:40:00");
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText("Duration: 2 hours 40 minutes");
    await expect(srDuration).toBeInTheDocument();
  },
};

export const HoursAndSeconds: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    duration: 7240,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText("2:00:40");
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText("Duration: 2 hours 40 seconds");
    await expect(srDuration).toBeInTheDocument();
  },
};

export const MinutesAndSeconds: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    duration: 160,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText("2:40");
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText("Duration: 2 minutes 40 seconds");
    await expect(srDuration).toBeInTheDocument();
  },
};

export const WithTimestampPadding: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    timestampPadding: true,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText("00:37:55");
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
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

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
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

    const duration = canvas.queryByText(stashDurationText);
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText(srDurationText);
    await expect(srDuration).toBeNull();
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

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    duration: 0,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.queryByText("0 seconds");
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText("Duration: 0 seconds");
    await expect(srDuration).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.queryByText(stashDurationText);
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText(srDurationText);
    await expect(srDuration).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.getByText(stashDurationText);
    await expect(duration).toBeInTheDocument();

    const srDuration = canvas.getByText(srDurationText);
    await expect(srDuration).toBeInTheDocument();
  },
};

export const ModalContextZeroValue: Story = {
  args: {
    context: "modal",
    duration: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const duration = canvas.queryByText("0 seconds");
    await expect(duration).toBeNull();

    const srDuration = canvas.queryByText("Duration: 0 seconds");
    await expect(srDuration).toBeNull();
  },
};
