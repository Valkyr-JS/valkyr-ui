import React, { useState } from "react";
import { LazyQueryResultTuple, OperationVariables } from "@apollo/client";
import CardGrid from "@/components/cards/layouts/CardGrid";
import GalleryCard, {
  GalleryCardModalContent,
} from "@/components/cards/GalleryCard";
import {
  CardModalNavigation,
  CardModalWrapper,
} from "@/components/cards/layouts/CardModal";
import { createGalleryCardID, mergeConfig } from "@/helpers";
const { PluginApi } = window;

PluginApi.patch.instead<IGalleryCardGrid>(
  "GalleryCardGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = mergeConfig(stashConfig.plugins["valkyr-ui"]);

      const [modalOpen, setModalOpen] = useState(false);
      const [modalGalleryIndex, setModalGalleryIndex] = useState(0);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");
      const [fullData, setFullData] = useState<(Gallery | null)[]>(
        props.galleries.map(() => null),
      );

      const [loadGalleryData]: LazyQueryResultTuple<
        { findGallery: Gallery },
        OperationVariables
      > = PluginApi.GQL.useFindGalleryLazyQuery();

      // Unlike scene card grids, gallery grids crash here if the galleries
      // array is empty. Provide a fallback when required.
      const titleID =
        createGalleryCardID(
          props.galleries[modalGalleryIndex]?.id ?? "undefined",
        ) + "Modal";

      /** Checks if full gallery data is missing, and updates it */
      const updateFullData = async (index: number) => {
        if (fullData[index] === null) {
          // If not, fetch it
          const galleryID = props.galleries[index].id;
          return await loadGalleryData({ variables: { id: galleryID } }).then(
            ({ data }) => {
              if (data) {
                // Add the fetched data to the state
                const updatedData = fullData.map((d, i) =>
                  i === index ? data.findGallery : d,
                );
                setFullData(updatedData);
                return data.findGallery;
              }
            },
          );
        }
        return fullData[index];
      };

      /** Handle the click event to open the modal. */
      const handleOpenModal = async (index: number) => {
        // Set the modal index for reference
        setModalGalleryIndex(index);

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
        props.galleries.length > 1
          ? {
              next: {
                disabled: modalGalleryIndex === props.galleries.length - 1,
                onClick: async () => {
                  const nextIndex = modalGalleryIndex + 1;

                  // Ensure data is available
                  await updateFullData(nextIndex).then((nextData) => {
                    // If the new target doesn't have data for the current
                    // section, reset it to details.
                    if (
                      (!nextData?.tags.length && modalSection === "tags") ||
                      (!nextData?.performers.length &&
                        modalSection === "performers") ||
                      (!nextData?.scenes.length && modalSection === "scenes")
                    )
                      setModalSection("details");
                    // Open the modal
                    setModalGalleryIndex(nextIndex);
                  });
                },
              },
              prev: {
                disabled: modalGalleryIndex === 0,
                onClick: async () => {
                  const prevIndex = modalGalleryIndex - 1;

                  // Ensure data is available
                  await updateFullData(prevIndex).then((prevData) => {
                    // If the new target doesn't have data for the current
                    // section, reset it to details.
                    if (
                      (!prevData?.tags.length && modalSection === "tags") ||
                      (!prevData?.performers.length &&
                        modalSection === "performers") ||
                      (!prevData?.scenes.length && modalSection === "scenes")
                    )
                      setModalSection("details");

                    // Open the modal
                    setModalGalleryIndex(prevIndex);
                  });
                },
              },
            }
          : undefined;

      if (pluginConfig.cards__galleryCard__enabled)
        return [
          <>
            <CardGrid
              cards={props.galleries.map((gl, i) => (
                <GalleryCard
                  key={i}
                  abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                  footer={{
                    openHandler: () => handleOpenModal(i),
                    pluginConfig,
                    setSection: setModalSection,
                  }}
                  gallery={gl}
                  onSelectedChanged={(selected: boolean, shiftKey: boolean) =>
                    props.onSelectChange(gl.id, selected, shiftKey)
                  }
                  pluginConfig={pluginConfig}
                  ratingSystem={stashConfig.ui.ratingSystemOptions}
                  selected={props.selectedIds.has(gl.id)}
                  selecting={props.selectedIds.size > 0}
                  zoomIndex={props.zoomIndex as StashCardGridZoom}
                />
              ))}
              zoomIndex={props.zoomIndex as StashCardGridZoom}
            />
            <CardModalWrapper
              bgClickHandler={handleModalOuterClick}
              classname="vui-gallery-card-modal"
              fullHeightModal={pluginConfig.general__fullHeightModals}
              show={modalOpen}
              titleID={titleID}
            >
              <GalleryCardModalContent
                abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                closeHandler={handleCloseModal}
                gallery={fullData[modalGalleryIndex] as GalleryDataFragment}
                navigation={navigationProps}
                pluginConfig={pluginConfig}
                ratingSystem={stashConfig.ui.ratingSystemOptions}
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

PluginApi.patch.instead<IGalleryCardProps>(
  "GalleryCard",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = mergeConfig(stashConfig.plugins["valkyr-ui"]);

      const [modalOpen, setModalOpen] = useState(false);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");
      const [fullData, setFullData] = useState<GalleryDataFragment | null>(
        null,
      );

      const [loadGalleryData]: LazyQueryResultTuple<
        { findGallery: GalleryDataFragment },
        OperationVariables
      > = PluginApi.GQL.useFindGalleryLazyQuery();

      const titleID = createGalleryCardID(props.gallery.id) + "Modal";

      /** Handle the click event to open the modal. */
      const handleOpenModal = async () => {
        // Check if the data has been fetched
        if (fullData === null) {
          // If not, fetch it
          const galleryID = props.gallery.id;
          loadGalleryData({ variables: { id: galleryID } }).then(({ data }) => {
            if (data) {
              setFullData(data.findGallery);

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

      if (pluginConfig.cards__galleryCard__enabled)
        return [
          <>
            <GalleryCard
              abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
              footer={{
                openHandler: handleOpenModal,
                pluginConfig,
                setSection: setModalSection,
              }}
              gallery={props.gallery}
              pluginConfig={pluginConfig}
              ratingSystem={stashConfig.ui.ratingSystemOptions}
            />
            <CardModalWrapper
              bgClickHandler={handleModalOuterClick}
              classname="vui-gallery-card-modal"
              fullHeightModal={pluginConfig.general__fullHeightModals}
              show={modalOpen}
              titleID={titleID}
            >
              <GalleryCardModalContent
                abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                closeHandler={handleCloseModal}
                gallery={fullData as GalleryDataFragment}
                pluginConfig={pluginConfig}
                ratingSystem={stashConfig.ui.ratingSystemOptions}
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
