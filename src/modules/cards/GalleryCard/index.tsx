import React from "react";
import CardGrid from "@/components/cards/layouts/CardGrid";
import GalleryCard from "@/components/cards/GalleryCard";
import { DEFAULT } from "@/constants";
const { PluginApi } = window;

PluginApi.patch.instead<IGalleryCardGrid>(
  "GalleryCardGrid",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      if (
        pluginConfig &&
        (pluginConfig?.cards__cardGrid__enabled ??
          DEFAULT.CARDS.CARD_GRID.ENABLED) &&
        (pluginConfig?.cards__galleryCard__enabled ??
          DEFAULT.CARDS.GALLERY_CARD.ENABLED)
      )
        return [
          <CardGrid
            cards={props.galleries.map((gl, i) => (
              <GalleryCard
                key={i}
                gallery={gl}
                pluginConfig={pluginConfig}
                ratingSystem={stashConfig.ui.ratingSystemOptions}
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

PluginApi.patch.instead<IGalleryCardProps>(
  "GalleryCard",
  function (props, _, Original) {
    const qConfig = PluginApi.GQL.useConfigurationQuery();
    if (!qConfig.loading) {
      const stashConfig: ExtendedConfigResult = qConfig.data.configuration;
      const pluginConfig = stashConfig.plugins["valkyr-ui"];

      if (
        pluginConfig &&
        (pluginConfig?.cards__galleryCard__enabled ??
          DEFAULT.CARDS.GALLERY_CARD.ENABLED)
      )
        return [
          <GalleryCard
            gallery={props.gallery}
            pluginConfig={pluginConfig}
            ratingSystem={stashConfig.ui.ratingSystemOptions}
          />,
        ];
    }

    return [<Original {...props} />];
  },
);
