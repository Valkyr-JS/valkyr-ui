import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { mergeConfig } from "@/helpers";
import CardsTab from "./";
import { fn } from "storybook/test";
import "../pages.scss";

const meta = {
  title: "Pages/Settings/Cards",
  component: CardsTab,
  parameters: {
    layout: "centered",
  },
  args: {
    configUpdateHandler: fn(),
    pluginConfig: mergeConfig({}),
  },
  tags: ["autodocs"],
  render: (args) => {
    const [pluginConfig, setPluginConfig] = useState(args.pluginConfig);

    const handlePluginUpdate = (updatedConfig: ValkyrUiConfigMap) => {
      args.configUpdateHandler(updatedConfig);
      setPluginConfig(updatedConfig);
    };
    return (
      <CardsTab
        configUpdateHandler={handlePluginUpdate}
        pluginConfig={pluginConfig}
      />
    );
  },
} satisfies Meta<typeof CardsTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
