import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { DEFAULT } from "@/constants";
import { getFileIsPortrait, getTitleFromObject, makeSceneUrl } from "@/helpers";
import AspectRatio from "../data/AspectRatio";
import BitRate from "../data/BitRate";
import Date from "../data/Date";
import Details from "../data/Details";
import Director from "../data/Director";
import Duration from "../data/Duration";
import OCount from "../data/OCount";
import Organized from "../data/Organized";
import PlayCount from "../data/PlayCount";
import RatingBanner from "../data/RatingBanner";
import RatingIcon from "../data/RatingIcon";
import Resolution from "../data/Resolution";
import Studio from "../data/Studio";
import {
  CardModalContent,
  CardModalNavigation,
  CardModalTagsSection,
} from "../layouts/CardModal";
import CastCrew from "../layouts/CastCrew";
import FileData from "../layouts/FileData";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import KeyData from "../layouts/KeyData";
import ReleaseData from "../layouts/ReleaseData";
import "./SceneCard.scss";

interface SceneCardProps {
  /** Stash user setting for whether to continue to the next scene when the
   * current one ends. */
  continuePlaylist?: Maybe<boolean> | undefined;

  /** Footer props. */
  footer: Omit<CardFooterProps, "sections">;

  /** The index of the scene in the current page query. */
  index?: ISceneCardProps["index"];

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The scenes in the current query. */
  queue?: ISceneCardProps["queue"];

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The Stash scene data. */
  scene: SlimSceneDataFragment;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

const SceneCard: React.FC<SceneCardProps> = (props) => {
  const componentClass = "vui-scene-card";
  const userDataClass = componentClass + "__user-data";

  const id = createSceneCardID(props.scene.id);
  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  const primaryFile =
    props.scene.files.length > 0 ? props.scene.files[0] : undefined;
  const isPortrait = getFileIsPortrait(primaryFile);
  const preview =
    (props.pluginConfig.cards__sceneCard__previewsEnabled ??
    DEFAULT.CARDS.SCENE_CARD.PREVIEWS_ENABLED)
      ? (props.scene.paths.preview ?? undefined)
      : undefined;

  const [isHovered, setIsHovered] = useState(false);

  const footerSections: CardModalSectionData[] = [["details"]];
  if (props.scene.tags.length)
    footerSections.push(["tags", props.scene.tags.length]);
  const footerProps = { ...props.footer, sections: footerSections };

  return (
    <GridCard
      classname={componentClass}
      footer={footerProps}
      id={id}
      link={sceneLink}
      onMouseOut={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
      pluginConfig={props.pluginConfig}
      thumbnail={
        <SceneCardThumbnail
          cardIsHovered={isHovered}
          context="card"
          isPortrait={isPortrait}
          link={sceneLink}
          pluginConfig={props.pluginConfig}
          preview={preview}
          rating100={props.scene.rating100}
          ratingSystem={props.ratingSystem}
          src={props.scene.paths.screenshot as string}
          thumbnailBackground={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundImage ??
            DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_IMAGE
          }
          thumbnailBackgroundStyle={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundStyle ??
            DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_STYLE
          }
          titleID={id}
          zoomIndex={props.zoomIndex}
        />
      }
      title={title}
      topLine={
        <>
          <Studio
            context="card"
            currentZoomIndex={props.zoomIndex}
            studio={props.scene.studio}
            userZoomIndex={
              props.pluginConfig.cards__sceneCard__studioZoomIndex ??
              DEFAULT.CARDS.SCENE_CARD.STUDIO_ZOOM_INDEX
            }
          />
          <div className={userDataClass}>
            <PlayCount
              context="card"
              count={props.scene.play_count}
              currentZoomIndex={props.zoomIndex}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__playCountZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.PLAY_COUNT_ZOOM_INDEX
              }
            />
            <OCount
              context="card"
              count={props.scene.o_counter}
              currentZoomIndex={props.zoomIndex}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__oCountZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.O_COUNT_ZOOM_INDEX
              }
            />
            <RatingIcon
              context="card"
              currentZoomIndex={props.zoomIndex}
              rating100={props.scene.rating100}
              ratingSystem={props.ratingSystem}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__ratingIconZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.RATING_ICON_ZOOM_INDEX
              }
            />
            <Organized
              context="card"
              currentZoomIndex={props.zoomIndex}
              organized={props.scene.organized}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__organizedZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.ORGANIZED_ZOOM_INDEX
              }
            />
          </div>
        </>
      }
    >
      <SceneCardBody
        pluginConfig={props.pluginConfig}
        scene={props.scene}
        zoomIndex={props.zoomIndex}
      />
    </GridCard>
  );
};

export default SceneCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                    Scene card body component                                   */
/* ---------------------------------------------------------------------------------------------- */

interface SceneCardBodyProps {
  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The Stash scene data. */
  scene: SlimSceneDataFragment;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

const SceneCardBody: React.FC<SceneCardBodyProps> = (props) => {
  const primaryFile =
    props.scene.files.length > 0 ? props.scene.files[0] : undefined;

  return (
    <>
      <KeyData>
        <ReleaseData>
          <Date
            context="card"
            currentZoomIndex={props.zoomIndex}
            date={props.scene.date}
            localeDateFormat={
              props.pluginConfig.general__localeDateFormat ??
              DEFAULT.GENERAL.LOCALE_DATE_FORMAT
            }
            userZoomIndex={
              props.pluginConfig.cards__sceneCard__dateZoomIndex ??
              DEFAULT.CARDS.SCENE_CARD.DATE_ZOOM_INDEX
            }
          />
        </ReleaseData>
        {primaryFile && (
          <FileData>
            <Duration
              context="card"
              currentZoomIndex={props.zoomIndex}
              duration={primaryFile.duration}
              timestampPadding={
                props.pluginConfig.cards__shared__timestampPadding ??
                DEFAULT.CARDS.SHARED.TIMESTAMP_PADDING
              }
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__durationZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.DURATION_ZOOM_INDEX
              }
            />
            <AspectRatio
              context="card"
              currentZoomIndex={props.zoomIndex}
              resolution={[primaryFile.width, primaryFile.height]}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__aspectRatioZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.ASPECT_RATIO_ZOOM_INDEX
              }
            />
            <BitRate
              bytes={primaryFile.bit_rate}
              context="card"
              currentZoomIndex={props.zoomIndex}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__bitRateZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.BIT_RATE_ZOOM_INDEX
              }
            />
            <Resolution
              asIcon={
                props.pluginConfig.cards__sceneCard__resolutionAsIcon ??
                DEFAULT.CARDS.SCENE_CARD.RESOLUTION_AS_ICON
              }
              context="card"
              currentZoomIndex={props.zoomIndex}
              resolution={[primaryFile.width, primaryFile.height]}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__resolutionZoomIndex ??
                DEFAULT.CARDS.SCENE_CARD.RESOLUTION_ZOOM_INDEX
              }
            />
          </FileData>
        )}
      </KeyData>
      <Details
        context="card"
        currentZoomIndex={props.zoomIndex}
        details={props.scene.details}
        maxLines={
          props.pluginConfig.cards__sceneCard__detailsMaxLines ??
          DEFAULT.CARDS.SCENE_CARD.DETAILS_MAX_LINES
        }
        userZoomIndex={
          props.pluginConfig.cards__sceneCard__detailsZoomIndex ??
          DEFAULT.CARDS.SCENE_CARD.DETAILS_ZOOM_INDEX
        }
      />
      <CastCrew>
        <Director
          context="card"
          currentZoomIndex={props.zoomIndex}
          director={props.scene.director}
          userZoomIndex={
            props.pluginConfig.cards__sceneCard__directorZoomIndex ??
            DEFAULT.CARDS.SCENE_CARD.DIRECTOR_ZOOM_INDEX
          }
        />
      </CastCrew>
    </>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                 Scene card thumbnail component                                 */
/* ---------------------------------------------------------------------------------------------- */

interface SceneCardThumbnailProps {
  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "card" | "modal";

  /** Whether a part of the card is currently being hovered over. */
  cardIsHovered?: boolean;

  /** Whether the scene is portrait-oriented or not. */
  isPortrait: boolean;

  /** The link to the object page. */
  link: string;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The path to the preview file. Disabled if `undefined`. */
  preview: string | undefined;

  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;

  /** The link to the scene cover thumbnail. */
  src: string;

  /** Adds a blurred version of the thumbnail to the background. */
  thumbnailBackground: boolean;

  /** Adds user-defined CSS to the thumbnail background. */
  thumbnailBackgroundStyle: string | null;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

export const SceneCardThumbnail: React.FC<SceneCardThumbnailProps> = (
  props,
) => {
  const componentClass = "vui-scene-card";
  const thumbnailClass = componentClass + "__thumbnail";

  const previewClass = componentClass + "__thumbnail-preview";
  const previewBackgroundClass = previewClass + "--blurred-bg";
  const previewPortraitClass = previewClass + "--portrait";
  const previewClassList = cx(previewClass, {
    [previewBackgroundClass]: props.thumbnailBackground,
    [previewPortraitClass]: props.isPortrait,
  });

  const preview =
    props.context === "card" &&
    (props.pluginConfig.cards__sceneCard__previewsEnabled ??
      DEFAULT.CARDS.SCENE_CARD.PREVIEWS_ENABLED)
      ? (props.preview ?? undefined)
      : undefined;

  const previewStyles: React.CSSProperties = {
    background: props.thumbnailBackgroundStyle
      ? props.thumbnailBackgroundStyle
      : undefined,
    backgroundImage: props.thumbnailBackground
      ? `url(${props.src})`
      : undefined,
  };

  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.cardIsHovered) {
      // Catch is necessary due to DOMException if user hovers before clicking on page
      videoEl.current?.play().catch(() => {});
    } else videoEl.current?.pause();
  }, [props.cardIsHovered]);

  return (
    <div className={thumbnailClass}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={previewClassList} style={previewStyles}>
          <img loading="lazy" alt="" src={props.src} />
          {preview && (
            <video
              data-testid="scene-card-preview"
              disableRemotePlayback
              playsInline
              muted
              loop
              preload="none"
              ref={videoEl}
              src={preview}
            />
          )}
        </div>
        <RatingBanner
          context={props.context}
          currentZoomIndex={props.zoomIndex}
          rating100={props.rating100}
          ratingSystem={props.ratingSystem}
          userZoomIndex={
            props.pluginConfig.cards__sceneCard__ratingBannerZoomIndex ??
            DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_ZOOM_INDEX
          }
        />
      </a>
    </div>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                   Scene card modal component                                   */
/* ---------------------------------------------------------------------------------------------- */

interface SceneCardModalContentProps {
  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** Stash user setting for whether to continue to the next scene when the
   * current one ends. */
  continuePlaylist?: Maybe<boolean> | undefined;

  /** The index of the scene in the current page query. */
  index?: ISceneCardProps["index"];

  /** Properties required for navigating in the modal. */
  navigation?: CardModalNavigation;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The scenes in the current query. */
  queue?: ISceneCardProps["queue"];

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The Stash scene data. */
  scene: SceneDataFragment;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const SceneCardModalContent: React.FC<SceneCardModalContentProps> = (
  props,
) => {
  const componentClass = "vui-scene-card";
  const userDataClass = componentClass + "__user-data";

  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  const primaryFile =
    props.scene.files.length > 0 ? props.scene.files[0] : undefined;
  const isPortrait = getFileIsPortrait(primaryFile);

  // Only render technical details if the user has enabled on cards them at any
  // breakpoint. The data will be available anyway under the file section.
  // Exceptions are duration and resolution which should always be available.
  const willRenderAspectRatio =
    (props.pluginConfig.cards__sceneCard__aspectRatioZoomIndex ??
      DEFAULT.CARDS.SCENE_CARD.ASPECT_RATIO_ZOOM_INDEX) > -1;
  const willRenderBitRate =
    (props.pluginConfig.cards__sceneCard__bitRateZoomIndex ??
      DEFAULT.CARDS.SCENE_CARD.BIT_RATE_ZOOM_INDEX) > -1;

  // Only render one of the two rating options
  const willRenderRatingBanner =
    (props.pluginConfig.cards__sceneCard__ratingBannerZoomIndex ??
      DEFAULT.CARDS.SCENE_CARD.RATING_BANNER_ZOOM_INDEX) > -1;

  const sections: CardModalSectionData[] = [["details"]];
  if (props.scene.tags.length) sections.push(["tags", props.scene.tags.length]);

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      link={sceneLink}
      navigation={props.navigation}
      pluginConfig={props.pluginConfig}
      section={props.section}
      sections={sections}
      setSection={props.setSection}
      thumbnail={
        <SceneCardThumbnail
          context="modal"
          isPortrait={isPortrait}
          link={sceneLink}
          pluginConfig={props.pluginConfig}
          preview={props.scene.paths.preview ?? undefined}
          rating100={willRenderRatingBanner ? props.scene.rating100 : null}
          ratingSystem={props.ratingSystem}
          src={props.scene.paths.screenshot as string}
          thumbnailBackground={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundImage ??
            DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_IMAGE
          }
          thumbnailBackgroundStyle={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundStyle ??
            DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_STYLE
          }
          titleID={props.titleID}
        />
      }
      title={title}
      titleID={props.titleID}
      topLine={
        <>
          <Studio context="modal" studio={props.scene.studio} />
          <div className={userDataClass}>
            <PlayCount context="modal" count={props.scene.play_count} />
            <OCount context="modal" count={props.scene.o_counter} />
            {willRenderRatingBanner ? null : (
              <RatingIcon
                context="modal"
                rating100={props.scene.rating100}
                ratingSystem={props.ratingSystem}
              />
            )}
            <Organized context="modal" organized={props.scene.organized} />
          </div>
        </>
      }
    >
      {props.section === "tags" ? (
        <CardModalTagsSection tags={props.scene.tags} />
      ) : (
        <>
          <KeyData>
            <ReleaseData>
              <Date
                context="modal"
                date={props.scene.date}
                localeDateFormat={
                  props.pluginConfig.general__localeDateFormat ??
                  DEFAULT.GENERAL.LOCALE_DATE_FORMAT
                }
              />
            </ReleaseData>
            {primaryFile && (
              <FileData>
                <Duration
                  context="modal"
                  duration={primaryFile.duration}
                  timestampPadding={
                    props.pluginConfig.cards__shared__timestampPadding ??
                    DEFAULT.CARDS.SHARED.TIMESTAMP_PADDING
                  }
                />
                {willRenderAspectRatio && (
                  <AspectRatio
                    context="modal"
                    resolution={[primaryFile.width, primaryFile.height]}
                  />
                )}
                {willRenderBitRate && (
                  <BitRate bytes={primaryFile.bit_rate} context="modal" />
                )}
                <Resolution
                  asIcon={
                    props.pluginConfig.cards__sceneCard__resolutionAsIcon ??
                    DEFAULT.CARDS.SCENE_CARD.RESOLUTION_AS_ICON
                  }
                  context="modal"
                  resolution={[primaryFile.width, primaryFile.height]}
                />
              </FileData>
            )}
          </KeyData>
          <Details context="modal" details={props.scene.details} />
          <CastCrew>
            <Director context="modal" director={props.scene.director} />
          </CastCrew>
        </>
      )}
    </CardModalContent>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted scene IDs. */
export const createSceneCardID = (stashID: string) => "sceneCard-" + stashID;
