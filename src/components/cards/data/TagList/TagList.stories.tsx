import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import TagList from ".";
import fullData from "../../../../../mocks/galleries/fullData.json";

const tagData = fullData.tags.map((t) => ({
  id: t.id,
  name: t.name,
  sortName: t.sort_name,
}));

const tagCount = tagData.length;

const meta = {
  title: "Components/Cards/Data/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  args: {
    tags: tagData,
  },
  argTypes: {
    ...dataComponentArgTypes,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TagList>;

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

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(tagCount);
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

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(0);
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

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(tagCount);
  },
};

export const NoDataAvailable: Story = {
  args: {
    context: "card",
    currentZoomIndex: 3,
    tags: [],
    userZoomIndex: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(0);
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userZoomIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(tagCount);
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userZoomIndex: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(0);
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(tagCount);
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    tags: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tags = canvas.queryAllByRole("listitem");
    await expect(tags.length).toEqual(0);
  },
};
