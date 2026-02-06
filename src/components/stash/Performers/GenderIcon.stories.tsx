import type { Meta, StoryObj } from "@storybook/react-vite";
import GenderIcon from "./GenderIcon";

const meta = {
  title: "Components/Stash/Performers/Gender icon",
  component: GenderIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof GenderIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Female: Story = {
  args: {
    gender: "FEMALE" as GenderEnum,
  },
};

export const Intersex: Story = {
  args: {
    gender: "INTERSEX" as GenderEnum,
  },
};

export const Male: Story = {
  args: {
    gender: "MALE" as GenderEnum,
  },
};

export const NonBinary: Story = {
  args: {
    gender: "NON_BINARY" as GenderEnum,
  },
};

export const TransgenderFemale: Story = {
  args: {
    gender: "TRANSGENDER_FEMALE" as GenderEnum,
  },
};

export const TransgenderMale: Story = {
  args: {
    gender: "TRANSGENDER_MALE" as GenderEnum,
  },
};
