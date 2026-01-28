import React, { useState } from "react";
import { LazyQueryResultTuple, OperationVariables } from "@apollo/client";
import CardGrid from "@/components/cards/layouts/CardGrid";
import GalleryCard, {
  createGalleryCardID,
  GalleryCardModalContent,
} from "@/components/cards/GalleryCard";
import {
  CardModalNavigation,
  CardModalWrapper,
} from "@/components/cards/layouts/CardModal";
import { DEFAULT } from "@/constants";
const { PluginApi } = window;

PluginApi.patch.instead<IGalleryCardGrid>(
  "GalleryCardGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

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

      const titleID =
        createGalleryCardID(props.galleries[modalGalleryIndex].id) + "Modal";

      /** Checks if full gallery data is missing, and updates it */
      const updateFullData = async (index: number) => {
        if (fullData[index] === null) {
          // If not, fetch it
          const galleryID = props.galleries[index].id;
          await loadGalleryData({ variables: { id: galleryID } }).then(
            ({ data }) => {
              if (data) {
                // Add the fetched data to the state
                const updatedData = fullData.map((d, i) =>
                  i === index ? data.findGallery : d,
                );
                setFullData(updatedData);
              }
            },
          );
        }
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

      const navigationProps: CardModalNavigation | undefined =
        props.galleries.length > 1
          ? {
              next: {
                disabled: modalGalleryIndex === props.galleries.length - 1,
                onClick: async () => {
                  const nextIndex = modalGalleryIndex + 1;

                  // Ensure data is available
                  await updateFullData(nextIndex);

                  // Open the modal
                  setModalGalleryIndex(nextIndex);
                },
              },
              prev: {
                disabled: modalGalleryIndex === 0,
                onClick: async () => {
                  const prevIndex = modalGalleryIndex - 1;

                  // Ensure data is available
                  await updateFullData(prevIndex);

                  // Open the modal
                  setModalGalleryIndex(prevIndex);
                },
              },
            }
          : undefined;

      if (
        pluginConfig &&
        (pluginConfig?.cards__cardGrid__enabled ??
          DEFAULT.CARDS.CARD_GRID.ENABLED) &&
        (pluginConfig?.cards__galleryCard__enabled ??
          DEFAULT.CARDS.GALLERY_CARD.ENABLED)
      )
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
                  selecting={props.selectedIds.size > 0}
                  selected={props.selectedIds.has(gl.id)}
                  zoomIndex={props.zoomIndex as StashCardGridZoom}
                />
              ))}
              zoomIndex={props.zoomIndex as StashCardGridZoom}
            />
            <CardModalWrapper
              classname="vui-gallery-card-modal"
              show={modalOpen}
              titleID={titleID}
            >
              <GalleryCardModalContent
                abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                closeHandler={() => setModalOpen(false)}
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
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

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

      if (
        pluginConfig &&
        (pluginConfig?.cards__galleryCard__enabled ??
          DEFAULT.CARDS.GALLERY_CARD.ENABLED)
      )
        return [
          <>
            <GalleryCard
              abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
              footer={{
                openHandler: () => handleOpenModal(),
                pluginConfig,
                setSection: setModalSection,
              }}
              gallery={props.gallery}
              pluginConfig={pluginConfig}
              ratingSystem={stashConfig.ui.ratingSystemOptions}
            />
            <CardModalWrapper
              classname="vui-gallery-card-modal"
              show={modalOpen}
              titleID={titleID}
            >
              <GalleryCardModalContent
                abbreviateCounters={!!stashConfig.ui.abbreviateCounters}
                closeHandler={() => setModalOpen(false)}
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
