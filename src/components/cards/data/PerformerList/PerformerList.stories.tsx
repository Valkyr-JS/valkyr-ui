import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import PerformerList from ".";

const performerData = [
  { id: "1", gender: "FEMALE" as GenderEnum, name: "Gabbie Carter" },
  { id: "2", gender: "MALE" as GenderEnum, name: "Xander Corvus" },
  { id: "3", gender: "FEMALE" as GenderEnum, name: "Angel Youngs" },
  {
    id: "4",
    gender: "TRANSGENDER_FEMALE" as GenderEnum,
    name: "Emma Rose",
  },
  {
    id: "5",
    gender: null,
    name: "Big Dave",
  },
];

const meta = {
  title: "Components/Cards/Data/PerformerList",
  component: PerformerList,
  parameters: {
    layout: "centered",
  },
  args: {
    genderSortFilter: undefined,
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

export const FemaleWithColor: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [{ id: "1", gender: "FEMALE" as GenderEnum, name: "Female" }],
    useGenderedColors: true,
    userZoomIndex: 2,
  },
};

export const IntersexWithColor: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [
      { id: "1", gender: "INTERSEX" as GenderEnum, name: "Intersex" },
    ],
    useGenderedColors: true,
    userZoomIndex: 2,
  },
};

export const MaleWithColor: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [{ id: "2", gender: "MALE" as GenderEnum, name: "Male" }],
    useGenderedColors: true,
    userZoomIndex: 2,
  },
};

export const NonBinaryWithColor: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [
      { id: "3", gender: "NON_BINARY" as GenderEnum, name: "Non-binary" },
    ],
    useGenderedColors: false,
    userZoomIndex: 2,
  },
};

export const TransgenderFemaleWithColor: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [
      {
        id: "4",
        gender: "TRANSGENDER_FEMALE" as GenderEnum,
        name: "Transgender female",
      },
    ],
    useGenderedColors: true,
    userZoomIndex: 2,
  },
};

export const TransgenderMaleWithColor: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [
      {
        id: "4",
        gender: "TRANSGENDER_MALE" as GenderEnum,
        name: "Transgender Male",
      },
    ],
    useGenderedColors: true,
    userZoomIndex: 2,
  },
};

export const UnknownWithColor: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    performers: [
      {
        id: "4",
        gender: "UNKNOWN" as GenderEnum,
        name: "Unknown",
      },
    ],
    useGenderedColors: true,
    userZoomIndex: 2,
  },
};

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

export const GenderFilter: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    genderSortFilter: [
      "FEMALE" as GenderEnum,
      "TRANSGENDER_FEMALE" as GenderEnum,
    ],
    performers: performerData,
    useGenderedColors: true,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performers = canvas.getAllByRole("link");
    const performerA = within(performers[0]).getByText("Angel Youngs");
    const performerB = within(performers[1]).getByText("Gabbie Carter");
    const performerC = within(performers[2]).getByText("Emma Rose");
    const performerD = canvas.queryByRole("link", { name: "Xander Corvus" });
    const performerE = canvas.queryByRole("link", { name: "Big Dave" });

    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();
    await expect(performerC).toBeInTheDocument();
    await expect(performerD).toBeNull();
    await expect(performerE).toBeNull();
  },
};

export const GenderUnfiltered: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    genderSortFilter: undefined,
    performers: performerData,
    useGenderedColors: true,
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const performers = canvas.getAllByRole("link");
    const performerA = within(performers[0]).getByText("Angel Youngs");
    const performerB = within(performers[1]).getByText("Big Dave");
    const performerC = within(performers[2]).getByText("Emma Rose");
    const performerD = within(performers[3]).getByText("Gabbie Carter");
    const performerE = within(performers[4]).getByText("Xander Corvus");

    await expect(performerA).toBeInTheDocument();
    await expect(performerB).toBeInTheDocument();
    await expect(performerC).toBeInTheDocument();
    await expect(performerD).toBeInTheDocument();
    await expect(performerE).toBeInTheDocument();
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

    const performerA = canvas.queryByRole("link", { name: "Gabbie Carter" });
    const performerB = canvas.queryByRole("link", { name: "Xander Corvus" });
    const performerC = canvas.getByRole("link", { name: "Angel Youngs" });
    const performerD = canvas.queryByRole("link", { name: "Emma Rose" });
    const performerE = canvas.getByRole("link", { name: "Big Dave" });
    const overflowText = canvas.getByText("and 3 more");
    await expect(performerA).toBeNull();
    await expect(performerB).toBeNull();
    await expect(performerC).toBeInTheDocument();
    await expect(performerD).toBeNull();
    await expect(performerE).toBeInTheDocument();
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
