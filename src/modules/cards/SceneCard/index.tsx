import React, { useState } from "react";
import { LazyQueryResultTuple, OperationVariables } from "@apollo/client";
import CardGrid from "@/components/cards/layouts/CardGrid";
import SceneCard, { SceneCardModalContent } from "@/components/cards/SceneCard";
import {
  CardModalNavigation,
  CardModalWrapper,
} from "@/components/cards/layouts/CardModal";
import { createSceneCardID, mergeConfig } from "@/helpers";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardGrid>(
  "SceneCardGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = mergeConfig(stashConfig.plugins["valkyr-ui"]);

      const [modalOpen, setModalOpen] = useState(false);
      const [modalSceneIndex, setModalSceneIndex] = useState(0);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");
      const [fullData, setFullData] = useState<(SceneDataFragment | null)[]>(
        props.scenes.map(() => null),
      );

      const [loadSceneData]: LazyQueryResultTuple<
        { findScene: SceneDataFragment },
        OperationVariables
      > = PluginApi.GQL.useFindSceneLazyQuery();

      const titleID =
        createSceneCardID(props.scenes[modalSceneIndex].id) + "Modal";

      /** Checks if full scene data is missing, and updates it */
      const updateFullData = async (index: number) => {
        if (fullData[index] === null) {
          // If not, fetch it
          const galleryID = props.scenes[index].id;
          return await loadSceneData({ variables: { id: galleryID } }).then(
            ({ data }) => {
              if (data) {
                // Add the fetched data to the state
                const updatedData = fullData.map((d, i) =>
                  i === index ? data.findScene : d,
                );
                setFullData(updatedData);
                return data.findScene;
              }
            },
          );
        }
        return fullData[index];
      };

      /** Handle the click event to open the modal. */
      const handleOpenModal = async (index: number) => {
        // Set the modal index for reference
        setModalSceneIndex(index);

        // Ensure data is available
        await updateFullData(index);

        // Open the modal
        setModalOpen(true);
      };

      /** Handle the click event to close the modal. */
      const handleCloseModal = () => {
        setModalOpen(false);

        // Reset to the details section
        setModalSection("details");
      };

      /** Handle the click event outside of the modal when it is open. */
      const handleModalOuterClick = pluginConfig.general__closeModalOnOuterClick
        ? handleCloseModal
        : undefined;

      const navigationProps: CardModalNavigation | undefined =
        props.scenes.length > 1
          ? {
              next: {
                disabled: modalSceneIndex === props.scenes.length - 1,
                onClick: async () => {
                  const nextIndex = modalSceneIndex + 1;

                  // Ensure data is available
                  await updateFullData(nextIndex).then((nextData) => {
                    // If the new target doesn't have data for the current
                    // section, reset it to details.
                    if (
                      (!nextData?.tags.length && modalSection === "tags") ||
                      (!nextData?.performers.length &&
                        modalSection === "performers") ||
                      (!nextData?.galleries.length &&
                        modalSection === "galleries") ||
                      (!nextData?.files.length && modalSection === "files")
                    )
                      setModalSection("details");

                    // Open the modal
                    setModalSceneIndex(nextIndex);
                  });
                },
              },
              prev: {
                disabled: modalSceneIndex === 0,
                onClick: async () => {
                  const prevIndex = modalSceneIndex - 1;

                  // Ensure data is available
                  await updateFullData(prevIndex).then((prevData) => {
                    // If the new target doesn't have data for the current
                    // section, reset it to details.
                    if (
                      (!prevData?.tags.length && modalSection === "tags") ||
                      (!prevData?.performers.length &&
                        modalSection === "performers") ||
                      (!prevData?.galleries.length &&
                        modalSection === "galleries") ||
                      (!prevData?.files.length && modalSection === "files")
                    )
                      setModalSection("details");

                    // Open the modal
                    setModalSceneIndex(prevIndex);
                  });
                },
              },
            }
          : undefined;

      if (pluginConfig.cards__sceneCard__enabled)
        return [
          <>
            <CardGrid
              cards={props.scenes.map((sc, i) => (
                <SceneCard
                  key={i}
                  abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                  continuePlaylist={
                    stashConfig.interface.continuePlaylistDefault
                  }
                  footer={{
                    openHandler: () => handleOpenModal(i),
                    pluginConfig,
                    setSection: setModalSection,
                  }}
                  index={i}
                  onSelectedChanged={(selected: boolean, shiftKey: boolean) =>
                    props.onSelectChange(sc.id, selected, shiftKey)
                  }
                  pluginConfig={pluginConfig}
                  queue={props.queue}
                  ratingSystem={stashConfig.ui.ratingSystemOptions}
                  scene={sc}
                  selected={props.selectedIds.has(sc.id)}
                  selecting={props.selectedIds.size > 0}
                  zoomIndex={props.zoomIndex as StashCardGridZoom}
                />
              ))}
              zoomIndex={props.zoomIndex as StashCardGridZoom}
            />
            <CardModalWrapper
              bgClickHandler={handleModalOuterClick}
              classname="vui-scene-card-modal"
              fullHeightModal={pluginConfig.general__fullHeightModals}
              isFileless={
                (fullData[modalSceneIndex] as SceneDataFragment)?.files
                  .length === 0
              }
              show={modalOpen}
              titleID={titleID}
            >
              <SceneCardModalContent
                abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                closeHandler={handleCloseModal}
                continuePlaylist={stashConfig.interface.continuePlaylistDefault}
                index={modalSceneIndex}
                navigation={navigationProps}
                pluginConfig={pluginConfig}
                queue={props.queue}
                ratingSystem={stashConfig.ui.ratingSystemOptions}
                scene={fullData[modalSceneIndex] as SceneDataFragment}
                section={modalSection}
                setSection={setModalSection}
                titleID={titleID}
              />
            </CardModalWrapper>
          </>,
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
      const pluginConfig = mergeConfig(stashConfig.plugins["valkyr-ui"]);

      const [modalOpen, setModalOpen] = useState(false);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");
      const [fullData, setFullData] = useState<SceneDataFragment | null>(null);

      const [loadSceneData]: LazyQueryResultTuple<
        { findScene: SceneDataFragment },
        OperationVariables
      > = PluginApi.GQL.useFindSceneLazyQuery();

      const titleID = createSceneCardID(props.scene.id) + "Modal";

      /** Handle the click event to open the modal. */
      const handleOpenModal = async () => {
        // Check if the data has been fetched
        if (fullData === null) {
          // If not, fetch it
          const sceneID = props.scene.id;
          loadSceneData({ variables: { id: sceneID } }).then(({ data }) => {
            if (data) {
              setFullData(data.findScene);

              // Open the modal
              setModalOpen(true);
            }
          });
        } else setModalOpen(true);
      };

      /** Handle the click event to close the modal. */
      const handleCloseModal = () => setModalOpen(false);

      /** Handle the click event outside of the modal when it is open. */
      const handleModalOuterClick = pluginConfig.general__closeModalOnOuterClick
        ? handleCloseModal
        : undefined;

      if (pluginConfig?.cards__sceneCard__enabled)
        return [
          <>
            <SceneCard
              abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
              continuePlaylist={stashConfig.interface.continuePlaylistDefault}
              footer={{
                openHandler: handleOpenModal,
                pluginConfig,
                setSection: setModalSection,
              }}
              index={props.index}
              pluginConfig={pluginConfig}
              ratingSystem={stashConfig.ui.ratingSystemOptions}
              queue={props.queue}
              scene={props.scene}
            />
            <CardModalWrapper
              bgClickHandler={handleModalOuterClick}
              classname="vui-scene-card-modal"
              fullHeightModal={pluginConfig.general__fullHeightModals}
              isFileless={props.scene.files.length === 0}
              show={modalOpen}
              titleID={titleID}
            >
              <SceneCardModalContent
                abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                closeHandler={handleCloseModal}
                continuePlaylist={stashConfig.interface.continuePlaylistDefault}
                index={props.index}
                pluginConfig={pluginConfig}
                queue={props.queue}
                ratingSystem={stashConfig.ui.ratingSystemOptions}
                scene={fullData as SceneDataFragment}
                section={modalSection}
                setSection={setModalSection}
                titleID={titleID}
              />
            </CardModalWrapper>
          </>,
        ];
    }

    return [<Original {...props} />];
  },
);
