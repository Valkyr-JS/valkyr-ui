import React from "react";
import CardGrid from "@/components/cards/CardGrid";
import SceneCard from "@/components/cards/SceneCard";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardsGrid>(
  "SceneCardsGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      console.log("ISceneCardsGrid: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      if (
        pluginConfig?.cards__cardGrids__enabled &&
        pluginConfig?.cards__sceneCards__enabled
      )
        return [
          <CardGrid
            cards={props.scenes.map((sc, i) => (
              <SceneCard key={i} scene={sc} />
            ))}
            zoomIndex={props.zoomIndex as 0 | 1 | 2 | 3}
          />,
        ];
    }

    return [<Original {...props} />];
  }
);

PluginApi.patch.instead<ISceneCardProps>(
  "SceneCard",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      if (pluginConfig?.cards__sceneCards__enabled)
        return [<SceneCard {...props} />];
    }

    return [<Original {...props} />];
  }
);
