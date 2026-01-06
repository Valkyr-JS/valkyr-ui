import { SceneCard } from "@/components/cards/SceneCard";
import React from "react";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardsGrid>(
  "SceneCardsGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      console.log("ISceneCardProps: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;

      if (stashConfig.plugins["valkyr-ui"]?.cards__sceneCards__enabled)
        return [
          <div className="row justify-content-center">
            {props.scenes.map((_sc, i) => (
              <SceneCard key={i} zoomIndex={props.zoomIndex} />
            ))}
          </div>,
        ];
    }

    return [<Original {...props} />];
  }
);
