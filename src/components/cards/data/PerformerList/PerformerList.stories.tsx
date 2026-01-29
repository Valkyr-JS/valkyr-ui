import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import PerformerList from ".";

const performerData = [
  { id: "1", gender: "FEMALE" as GenderEnum.Female, name: "Gabbie Carter" },
  { id: "2", gender: "MALE" as GenderEnum.Male, name: "Xander Corvus" },
  { id: "3", gender: "FEMALE" as GenderEnum.Female, name: "Angel Youngs" },
  {
    id: "4",
    gender: "TRANSGENDER_FEMALE" as GenderEnum.TransgenderMale,
    name: "Emma Rose",
  },
];

const meta = {
  title: "Components/Cards/Data/PerformerList",
  component: PerformerList,
  parameters: {
    layout: "centered",
  },
  args: {
    max: undefined,
    performers: performerData,
    useGenderedColors: false,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PerformerList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnePerformer: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    userZoomIndex: 2,
    performers: [performerData[0]],
  },
};

export const TwoPerformers: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    userZoomIndex: 2,
    performers: [performerData[0], performerData[1]],
  },
};

export const ThreePerformers: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [performerData[0], performerData[1], performerData[2]],
    userZoomIndex: 2,
  },
};

export const FourPerformers: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [
      performerData[0],
      performerData[1],
      performerData[2],
      performerData[3],
    ],
    userZoomIndex: 2,
  },
};

export const OnePerformerMaxTwo: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    max: 2,
    userZoomIndex: 2,
    performers: [performerData[0]],
  },
};

export const TwoPerformersMaxTwo: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    max: 2,
    userZoomIndex: 2,
    performers: [performerData[0], performerData[1]],
  },
};

export const ThreePerformersMaxTwo: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    max: 2,
    performers: [performerData[0], performerData[1], performerData[2]],
    userZoomIndex: 2,
  },
};

export const FourPerformersMaxTwo: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    max: 2,
    performers: [
      performerData[0],
      performerData[1],
      performerData[2],
      performerData[3],
    ],
    userZoomIndex: 2,
  },
};

export const OverflowMax: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    max: 2,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performerA = canvas.getByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.getByRole("link", { name: "Xander Corvus" });
    const performerC = canvas.queryByRole("link", { name: "Angel Youngs" });
    const performerD = canvas.queryByRole("link", { name: "Emma Rose" });
    const overflowText = canvas.getByText("and 2 more");
    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();
    await expect(performerC).toBeNull();
    await expect(performerD).toBeNull();
    await expect(overflowText).toBeInTheDocument();
  },
};

export const GenderedColors: Story = {
  args: {
    context: "modal",
    performers: performerData,
    useGenderedColors: true,
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
    performers: [],
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
    performers: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performerA = canvas.queryByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.queryByRole("link", { name: "Xander Corvus" });
    await expect(performerA).toBeNull();
    await expect(performerB).toBeNull();
  },
};
