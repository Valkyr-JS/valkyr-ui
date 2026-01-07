import React from "react";
import CardGrid from "@/components/cards/CardGrid";
import GalleryCard from "@/components/cards/GalleryCard";
const { PluginApi } = window;

PluginApi.patch.instead<IGalleryCardGrid>(
  "GalleryCardGrid",
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
            cards={props.galleries.map((gl, i) => (
              <GalleryCard key={i} gallery={gl} />
            ))}
            zoomIndex={props.zoomIndex as 0 | 1 | 2 | 3}
          />,
        ];
    }

    return [<Original {...props} />];
  }
);

PluginApi.patch.instead<IGalleryCardProps>(
  "GalleryCard",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      if (pluginConfig?.cards__sceneCards__enabled)
        return [<GalleryCard {...props} />];
    }

    return [<Original {...props} />];
  }
);
