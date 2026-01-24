import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { dataComponentArgTypes } from "../../../../../.storybook/argTypes";
import DateComponent from ".";

const stashDateText = "2015-12-25";
const srDateText = "Date: 25 December 2015";

const meta = {
  title: "Components/Cards/Data/Date",
  component: DateComponent,
  parameters: {
    layout: "centered",
  },
  args: {
    date: stashDateText,
    localeDateFormat: false,
  },
  argTypes: {
    ...dataComponentArgTypes,
    date: {
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YearOnlyDate: Story = {
  args: {
    context: "card",
    date: "2015",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText("2015");
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText("Date: 2015");
    await expect(srDate).toBeInTheDocument();
  },
};

export const YearMonthDate: Story = {
  args: {
    context: "card",
    date: "2015-12",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText("2015-12");
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText("Date: December 2015");
    await expect(srDate).toBeInTheDocument();
  },
};

export const LocaleFormat: Story = {
  args: {
    context: "card",
    localeDateFormat: true,
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText("25/12/2015");
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText(srDateText);
    await expect(srDate).toBeInTheDocument();
  },
};

export const NoLocaleFormat: Story = {
  args: {
    context: "card",
    localeDateFormat: false,
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText("2015-12-25");
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText(srDateText);
    await expect(srDate).toBeInTheDocument();
  },
};

export const AboveZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText(stashDateText);
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText(srDateText);
    await expect(srDate).toBeInTheDocument();
  },
};

export const BelowZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 0,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.queryByText(stashDateText);
    await expect(date).toBeNull();

    const srDate = canvas.queryByText(srDateText);
    await expect(srDate).toBeNull();
  },
};

export const EqualsZoomBreakpoint: Story = {
  args: {
    context: "card",
    currentBreakpoint: 2,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText(stashDateText);
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText(srDateText);
    await expect(srDate).toBeInTheDocument();
  },
};

export const NoDataAvailable: Story = {
  args: {
    context: "card",
    currentBreakpoint: 3,
    date: null,
    userBreakpoint: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.queryByText(stashDateText);
    await expect(date).toBeNull();

    const srDate = canvas.queryByText(srDateText);
    await expect(srDate).toBeNull();
  },
};

export const WithoutZoomData: Story = {
  args: {
    context: "card",
    userBreakpoint: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText(stashDateText);
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText(srDateText);
    await expect(srDate).toBeInTheDocument();
  },
};

export const CardUserDisabled: Story = {
  args: {
    context: "card",
    userBreakpoint: -1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.queryByText(stashDateText);
    await expect(date).toBeNull();

    const srDate = canvas.queryByText(srDateText);
    await expect(srDate).toBeNull();
  },
};

export const ModalContext: Story = {
  args: {
    context: "modal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.getByText(stashDateText);
    await expect(date).toBeInTheDocument();

    const srDate = canvas.getByText(srDateText);
    await expect(srDate).toBeInTheDocument();
  },
};

export const ModalContextNoData: Story = {
  args: {
    context: "modal",
    date: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const date = canvas.queryByText(stashDateText);
    await expect(date).toBeNull();

    const srDate = canvas.queryByText(srDateText);
    await expect(srDate).toBeNull();
  },
};
