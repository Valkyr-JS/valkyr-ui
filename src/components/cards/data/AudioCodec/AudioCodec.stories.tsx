import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import AudioCodec from ".";

const stashAudioCodecText = "aac";
const srAudioCodecText = "Audio Codec: aac";

const meta = {
  title: "Components/Cards/Data/Audio Codec",
  component: AudioCodec,
  parameters: {
    layout: "centered",
  },
  args: {
    codec: "aac",
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AudioCodec>;

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

    const audioCodec = canvas.getByText(stashAudioCodecText);
    await expect(audioCodec).toBeInTheDocument();

    const srAudioCodec = canvas.getByText(srAudioCodecText);
    await expect(srAudioCodec).toBeInTheDocument();
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

    const audioCodec = canvas.queryByText(stashAudioCodecText);
    await expect(audioCodec).toBeNull();

    const srAudioCodec = canvas.queryByText(srAudioCodecText);
    await expect(srAudioCodec).toBeNull();
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

    const audioCodec = canvas.getByText(stashAudioCodecText);
    await expect(audioCodec).toBeInTheDocument();

    const srAudioCodec = canvas.getByText(srAudioCodecText);
    await expect(srAudioCodec).toBeInTheDocument();
  },
};

export const NoData: Story = {
  args: {
    context: "card",
    codec: "",
    currentZoomIndex: 3,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const audioCodec = canvas.queryByText(stashAudioCodecText);
    await expect(audioCodec).toBeNull();

    const srAudioCodec = canvas.queryByText(srAudioCodecText);
    await expect(srAudioCodec).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const audioCodec = canvas.getByText(stashAudioCodecText);
    await expect(audioCodec).toBeInTheDocument();

    const srAudioCodec = canvas.getByText(srAudioCodecText);
    await expect(srAudioCodec).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const audioCodec = canvas.queryByText(stashAudioCodecText);
    await expect(audioCodec).toBeNull();

    const srAudioCodec = canvas.queryByText(srAudioCodecText);
    await expect(srAudioCodec).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const audioCodec = canvas.getByText(stashAudioCodecText);
    await expect(audioCodec).toBeInTheDocument();

    const srAudioCodec = canvas.getByText(srAudioCodecText);
    await expect(srAudioCodec).toBeInTheDocument();
  },
};

export const ModalContextNoCodec: Story = {
  args: {
    context: "modal",
    codec: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const audioCodec = canvas.queryByText(stashAudioCodecText);
    await expect(audioCodec).toBeNull();

    const srAudioCodec = canvas.queryByText(srAudioCodecText);
    await expect(srAudioCodec).toBeNull();
  },
};
