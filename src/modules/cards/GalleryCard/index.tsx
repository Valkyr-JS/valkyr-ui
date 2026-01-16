import React, { useState } from "react";
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
      console.log("IGalleryCardGrid: ", props);
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      const [modalOpen, setModalOpen] = useState(false);
      const [modalGalleryIndex, setModalGalleryIndex] = useState(0);
      const [modalSection, setModalSection] =
        useState<CardModalSection>("details");

      const titleID =
        createGalleryCardID(props.galleries[modalGalleryIndex].id) + "Modal";

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
                    openHandler: () => setModalOpen(!modalOpen),
                    setData: () => setModalGalleryIndex(i),
                    setSection: setModalSection,
                  }}
                  gallery={gl}
                  pluginConfig={pluginConfig}
                />
              ))}
              zoomIndex={props.zoomIndex as 0 | 1 | 2 | 3}
            />
            <CardModalWrapper show={modalOpen} titleID={titleID}>
              <GalleryCardModalContent
                closeHandler={() => setModalOpen(false)}
                gallery={props.galleries[modalGalleryIndex]}
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
                setSection: setModalSection,
              }}
              pluginConfig={pluginConfig}
            />
            <CardModalWrapper show={modalOpen} titleID={titleID}>
              <GalleryCardModalContent
                closeHandler={() => setModalOpen(false)}
                gallery={props.gallery}
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
