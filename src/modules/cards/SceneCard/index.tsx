import React from "react";
import CardGrid from "@/components/cards/layouts/CardGrid";
import SceneCard from "@/components/cards/SceneCard";
import { DEFAULT } from "@/constants";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardGrid>(
  "SceneCardGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      console.log("ISceneCardGrid: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      if (
        pluginConfig &&
        (pluginConfig?.cards__cardGrid__enabled ??
          DEFAULT.CARDS.CARD_GRID.ENABLED) &&
        (pluginConfig?.cards__sceneCard__enabled ??
          DEFAULT.CARDS.SCENE_CARD.ENABLED)
      )
        return [
          <CardGrid
            cards={props.scenes.map((sc, i) => (
              <SceneCard
                key={i}
                continuePlaylist={stashConfig.interface.continuePlaylistDefault}
                index={i}
                pluginConfig={pluginConfig}
                queue={props.queue}
                ratingSystem={stashConfig.ui.ratingSystemOptions}
                scene={sc}
                zoomBreakpoint={props.zoomIndex as StashCardGridZoom}
              />
            ))}
            zoomIndex={props.zoomIndex as StashCardGridZoom}
          />,
        ];
    }

    return [<Original {...props} />];
  },
);

PluginApi.patch.instead<ISceneCardProps>(
  "SceneCard",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      if (
        pluginConfig &&
        (pluginConfig?.cards__sceneCard__enabled ?? DEFAULT.CARDS.SCENE_CARD)
      )
        return [
          <SceneCard
            continuePlaylist={stashConfig.interface.continuePlaylistDefault}
            index={props.index}
            pluginConfig={pluginConfig}
            ratingSystem={stashConfig.ui.ratingSystemOptions}
            queue={props.queue}
            scene={props.scene}
          />,
        ];
    }

    return [<Original {...props} />];
  },
);
