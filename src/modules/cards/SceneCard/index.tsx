import React, { useState } from "react";
import CardGrid from "@/components/cards/layouts/CardGrid";
import SceneCard, {
  createSceneCardID,
  SceneCardModalContent,
} from "@/components/cards/SceneCard";
import { CardModalWrapper } from "@/components/cards/layouts/CardModal";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardGrid>(
  "SceneCardGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      console.log("ISceneCardGrid: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      const [modalOpen, setModalOpen] = useState(false);
      const [modalSceneIndex, setModalSceneIndex] = useState(0);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");

      const titleID =
        createSceneCardID(props.scenes[modalSceneIndex].id) + "Modal";

      if (
        pluginConfig?.cards__cardGrid__enabled &&
        pluginConfig?.cards__sceneCard__enabled
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
                  pluginConfig={pluginConfig}
                  queue={props.queue}
                  scene={sc}
                />
              ))}
              zoomIndex={props.zoomIndex as 0 | 1 | 2 | 3}
            />
            <CardModalWrapper show={modalOpen} titleID={titleID}>
              <SceneCardModalContent
                closeHandler={() => setModalOpen(false)}
                continuePlaylist={stashConfig.interface.continuePlaylistDefault}
                index={modalSceneIndex}
                queue={props.queue}
                scene={props.scenes[modalSceneIndex]}
                section={modalSection}
                setSection={setModalSection}
                titleID={titleID}
              />
            </CardModalWrapper>
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

      const [modalOpen, setModalOpen] = useState(false);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");

      const titleID = createSceneCardID(props.scene.id) + "Modal";

      if (pluginConfig?.cards__sceneCard__enabled)
        return [
          <>
            <SceneCard
              continuePlaylist={stashConfig.interface.continuePlaylistDefault}
              footer={{
                openHandler: () => setModalOpen(!modalOpen),
                setSection: setModalSection,
              }}
              index={props.index}
              pluginConfig={pluginConfig}
              queue={props.queue}
              scene={props.scene}
            />
            <CardModalWrapper show={modalOpen} titleID={titleID}>
              <SceneCardModalContent
                closeHandler={() => setModalOpen(false)}
                continuePlaylist={stashConfig.interface.continuePlaylistDefault}
                index={props.index}
                queue={props.queue}
                scene={props.scene}
                section={modalSection}
                setSection={setModalSection}
                titleID={titleID}
              />
            </CardModalWrapper>
          </>,
        ];
    }

    return [<Original {...props} />];
  }
);
