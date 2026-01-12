import type { Meta, StoryObj } from "@storybook/react-vite";
import CardsTab from "./cards";
import { fn } from "storybook/test";

const meta = {
  title: "Pages/Settings/Cards",
  component: CardsTab,
  parameters: {
    layout: "centered",
  },
  args: {
    configUpdateHandler: fn(),
    pluginConfig: {},
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardsTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
