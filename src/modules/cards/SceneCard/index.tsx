import { SceneCard } from "@/components/cards/SceneCard";
import React from "react";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardProps>(
  "SceneCard",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      console.log("ISceneCardProps: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;

      if (stashConfig.plugins["valkyr-ui"]?.cards__sceneCards__enabled)
        return [<SceneCard {...props} />];
    }

    return [<Original {...props} />];
  }
);
