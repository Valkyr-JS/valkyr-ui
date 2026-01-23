import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import GeneralTab from "./";
import { fn } from "storybook/test";
import "../pages.scss";

const meta = {
  title: "Pages/Settings/General",
  component: GeneralTab,
  parameters: {
    layout: "centered",
  },
  args: {
    configUpdateHandler: fn(),
    pluginConfig: {},
  },
  tags: ["autodocs"],
  render: (args) => {
    const [pluginConfig, setPluginConfig] = useState(args.pluginConfig);

    const handlePluginUpdate = (updatedConfig: ValkyrUiConfigMap) => {
      args.configUpdateHandler(updatedConfig);
      setPluginConfig(updatedConfig);
    };
    return (
      <GeneralTab
        configUpdateHandler={handlePluginUpdate}
        pluginConfig={pluginConfig}
      />
    );
  },
} satisfies Meta<typeof GeneralTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
