import React from "react";
import CardGrid from "@/components/cards/CardGrid";
import { SceneCard } from "@/components/cards/SceneCard";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardsGrid>(
  "SceneCardsGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      console.log("ISceneCardsGrid: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;

      if (stashConfig.plugins["valkyr-ui"]?.cards__sceneCards__enabled)
        return [
          <CardGrid>
            {props.scenes.map((_sc, i) => (
              <SceneCard key={i} zoomIndex={props.zoomIndex} />
            ))}
          </CardGrid>,
        ];
    }

    return [<Original {...props} />];
  }
);
