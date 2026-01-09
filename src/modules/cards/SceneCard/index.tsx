import React, { useState } from "react";
import CardGrid from "@/components/cards/CardGrid";
import SceneCard, { SceneCardModal } from "@/components/cards/SceneCard";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardsGrid>(
  "SceneCardsGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      console.log("ISceneCardsGrid: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      const [modalOpen, setModalOpen] = useState(false);
      const [modalSceneIndex, setModalSceneIndex] = useState(0);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");

      if (
        pluginConfig?.cards__cardGrids__enabled &&
        pluginConfig?.cards__sceneCards__enabled
      )
        return [
          <>
            <CardGrid
              cards={props.scenes.map((sc, i) => (
                <SceneCard
                  key={i}
                  continuePlaylist={
                    stashConfig.interface.continuePlaylistDefault
                  }
                  footer={{
                    openHandler: () => setModalOpen(!modalOpen),
                    setData: () => setModalSceneIndex(i),
                    setSection: setModalSection,
                  }}
                  index={i}
                  queue={props.queue}
                  scene={sc}
                />
              ))}
              zoomIndex={props.zoomIndex as 0 | 1 | 2 | 3}
            />
            <SceneCardModal
              closeHandler={() => setModalOpen(false)}
              continuePlaylist={stashConfig.interface.continuePlaylistDefault}
              index={modalSceneIndex}
              queue={props.queue}
              scene={props.scenes[modalSceneIndex]}
              section={modalSection}
              setSection={setModalSection}
              show={modalOpen}
            />
          </>,
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
        return [
          <SceneCard
            continuePlaylist={stashConfig.interface.continuePlaylistDefault}
            index={props.index}
            queue={props.queue}
            scene={props.scene}
          />,
        ];
    }

    return [<Original {...props} />];
  }
);
