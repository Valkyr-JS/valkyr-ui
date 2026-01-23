import React, { useState } from "react";
import { LazyQueryResultTuple, OperationVariables } from "@apollo/client";
import CardGrid from "@/components/cards/layouts/CardGrid";
import GalleryCard, {
  createGalleryCardID,
  GalleryCardModalContent,
} from "@/components/cards/GalleryCard";
import { CardModalWrapper } from "@/components/cards/layouts/CardModal";
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

      /** Handle the click event to open the modal. */
      const handleOpenModal = async (index: number) => {
        // Set the modal index for reference
        setModalGalleryIndex(index);

        // Check if the data has been fetched
        if (fullData[index] === null) {
          // If not, fetch it
          const galleryID = props.galleries[index].id;
          loadGalleryData({ variables: { id: galleryID } }).then(({ data }) => {
            if (data) {
              // Add the fetched data to the state
              const updatedData = fullData.map((d, i) =>
                i === index ? data.findGallery : d,
              );
              setFullData(updatedData);

              // Open the modal
              setModalOpen(true);
            }
          });
        } else setModalOpen(true);
      };

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
                  footer={{
                    openHandler: () => handleOpenModal(i),
                    pluginConfig,
                    setSection: setModalSection,
                  }}
                  gallery={gl}
                  pluginConfig={pluginConfig}
                  ratingSystem={stashConfig.ui.ratingSystemOptions}
                  zoomBreakpoint={props.zoomIndex as StashCardGridZoom}
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
                closeHandler={() => setModalOpen(false)}
                gallery={fullData[modalGalleryIndex] as Gallery}
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

      const titleID = createGalleryCardID(props.gallery.id) + "Modal";

      if (
        pluginConfig &&
        (pluginConfig?.cards__galleryCard__enabled ??
          DEFAULT.CARDS.GALLERY_CARD.ENABLED)
      )
        return [
          <>
            <GalleryCard
              {...props}
              footer={{
                openHandler: () => setModalOpen(!modalOpen),
                pluginConfig,
                setSection: setModalSection,
              }}
              pluginConfig={pluginConfig}
              ratingSystem={stashConfig.ui.ratingSystemOptions}
            />
            <CardModalWrapper
              classname="vui-gallery-card-modal"
              show={modalOpen}
              titleID={titleID}
            >
              <GalleryCardModalContent
                closeHandler={() => setModalOpen(false)}
                gallery={props.gallery}
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
