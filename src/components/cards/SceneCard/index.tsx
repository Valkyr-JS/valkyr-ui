import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { DEFAULT } from "@/constants";
import { getFileIsPortrait, getTitleFromObject, makeSceneUrl } from "@/helpers";
import Date from "../data/Date";
import Details from "../data/Details";
import Duration from "../data/Duration";
import OCount from "../data/OCount";
import Organized from "../data/Organized";
import RatingBanner from "../data/RatingBanner";
import RatingIcon from "../data/RatingIcon";
import Resolution from "../data/Resolution";
import Studio from "../data/Studio";
import {
  CardModalContent,
  CardModalTagsSection,
  CardModalWrapper,
} from "../layouts/CardModal";
import FileData from "../layouts/FileData";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import KeyData from "../layouts/KeyData";
import ReleaseData from "../layouts/ReleaseData";
import "./SceneCard.scss";

interface SceneCardProps {
  /** Stash user setting for whether to continue to the next scene when the
   * current one ends. */
  continuePlaylist?: Maybe<boolean> | undefined;

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

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
}

const SceneCard: React.FC<SceneCardProps> = (props) => {
  const id = createSceneCardID(props.scene.id);

  /* -------------------------------------------- Modal ------------------------------------------- */

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSection, setModalSection] = useState<CardModalSection>("details");

  const modalTitleID = id + "Modal";

  /* ------------------------------------------- Footer ------------------------------------------- */

  const footerSections: CardModalSectionData[] = [["details"]];
  if (props.scene.tags.length)
    footerSections.push(["tags", props.scene.tags.length]);

  const footerProps: CardFooterProps = {
    openHandler: () => setModalOpen(!modalOpen),
    pluginConfig: props.pluginConfig,
    sections: footerSections,
    setSection: setModalSection,
  };

  /* --------------------------------------------- --- -------------------------------------------- */

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
  const preview =
    (props.pluginConfig.cards__sceneCard__previewsEnabled ??
    DEFAULT.CARDS.SCENE_CARD.PREVIEWS_ENABLED)
      ? (props.scene.paths.preview ?? undefined)
      : undefined;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
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
            zoomBreakpoint={props.zoomBreakpoint}
          />
        }
        title={title}
        topLine={
          <>
            <Studio
              context="card"
              currentBreakpoint={props.zoomBreakpoint}
              studio={props.scene.studio}
              userBreakpoint={
                props.pluginConfig.cards__sceneCard__studioBreakpoint ??
                DEFAULT.CARDS.SCENE_CARD.STUDIO_BREAKPOINT
              }
            />
            <div className={userDataClass}>
              <OCount
                context="card"
                count={props.scene.o_counter}
                currentBreakpoint={props.zoomBreakpoint}
                userBreakpoint={
                  props.pluginConfig.cards__sceneCard__oCountBreakpoint ??
                  DEFAULT.CARDS.SCENE_CARD.O_COUNT_BREAKPOINT
                }
              />
              <RatingIcon
                context="card"
                currentBreakpoint={props.zoomBreakpoint}
                rating100={props.scene.rating100}
                ratingSystem={props.ratingSystem}
                userBreakpoint={
                  props.pluginConfig.cards__sceneCard__ratingIconBreakpoint ??
                  DEFAULT.CARDS.SCENE_CARD.RATING_ICON_BREAKPOINT
                }
              />
              <Organized
                context="card"
                currentBreakpoint={props.zoomBreakpoint}
                organized={props.scene.organized}
                userBreakpoint={
                  props.pluginConfig.cards__sceneCard__organizedBreakpoint ??
                  DEFAULT.CARDS.SCENE_CARD.ORGANIZED_BREAKPOINT
                }
              />
            </div>
          </>
        }
      >
        <SceneCardBody
          pluginConfig={props.pluginConfig}
          scene={props.scene}
          zoomBreakpoint={props.zoomBreakpoint}
        />
      </GridCard>
      <CardModalWrapper
        classname="vui-scene-card-modal"
        show={modalOpen}
        titleID={modalTitleID}
      >
        <SceneCardModalContent
          closeHandler={() => setModalOpen(false)}
          continuePlaylist={props.continuePlaylist}
          index={props.index}
          pluginConfig={props.pluginConfig}
          queue={props.queue}
          ratingSystem={props.ratingSystem}
          scene={props.scene}
          section={modalSection}
          setSection={setModalSection}
          titleID={modalTitleID}
        />
      </CardModalWrapper>
    </>
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

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
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
            currentBreakpoint={props.zoomBreakpoint}
            date={props.scene.date}
            localeDateFormat={
              props.pluginConfig.general__localeDateFormat ??
              DEFAULT.GENERAL.LOCALE_DATE_FORMAT
            }
            userBreakpoint={
              props.pluginConfig.cards__sceneCard__dateBreakpoint ??
              DEFAULT.CARDS.SCENE_CARD.DATE_BREAKPOINT
            }
          />
        </ReleaseData>
        <FileData>
          {primaryFile && (
            <>
              <Duration
                context="card"
                currentBreakpoint={props.zoomBreakpoint}
                duration={primaryFile.duration}
                timestampPadding={
                  props.pluginConfig.cards__shared__timestampPadding ??
                  DEFAULT.CARDS.SHARED.TIMESTAMP_PADDING
                }
                userBreakpoint={
                  props.pluginConfig.cards__sceneCard__durationBreakpoint ??
                  DEFAULT.CARDS.SCENE_CARD.DURATION_BREAKPOINT
                }
              />
              <Resolution
                asIcon={
                  props.pluginConfig.cards__sceneCard__resolutionAsIcon ??
                  DEFAULT.CARDS.SCENE_CARD.RESOLUTION_AS_ICON
                }
                context="card"
                currentBreakpoint={props.zoomBreakpoint}
                resolution={[primaryFile.width, primaryFile.height]}
                userBreakpoint={
                  props.pluginConfig.cards__sceneCard__resolutionBreakpoint ??
                  DEFAULT.CARDS.SCENE_CARD.RESOLUTION_BREAKPOINT
                }
              />
            </>
          )}
        </FileData>
      </KeyData>
      <Details
        context="card"
        currentBreakpoint={props.zoomBreakpoint}
        details={props.scene.details}
        maxLines={
          props.pluginConfig.cards__sceneCard__detailsMaxLines ??
          DEFAULT.CARDS.SCENE_CARD.DETAILS_MAX_LINES
        }
        userBreakpoint={
          props.pluginConfig.cards__sceneCard__detailsBreakpoint ??
          DEFAULT.CARDS.SCENE_CARD.DETAILS_BREAKPOINT
        }
      />
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

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
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
          currentBreakpoint={props.zoomBreakpoint}
          rating100={props.rating100}
          ratingSystem={props.ratingSystem}
          userBreakpoint={
            props.pluginConfig.cards__sceneCard__ratingBannerBreakpoint ??
            DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_BREAKPOINT
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

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The scenes in the current query. */
  queue?: ISceneCardProps["queue"];

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The Stash scene data. */
  scene: SlimSceneDataFragment;

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

  // Only render one of the two rating options
  const willRenderRatingBanner =
    (props.pluginConfig.cards__sceneCard__ratingBannerBreakpoint ??
      DEFAULT.CARDS.SCENE_CARD.RATING_BANNER_BREAKPOINT) > -1;

  const sections: CardModalSectionData[] = [["details"]];
  if (props.scene.tags.length) sections.push(["tags", props.scene.tags.length]);

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      link={sceneLink}
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
            <FileData>
              {primaryFile && (
                <>
                  <Duration
                    context="modal"
                    duration={primaryFile.duration}
                    timestampPadding={
                      props.pluginConfig.cards__shared__timestampPadding ??
                      DEFAULT.CARDS.SHARED.TIMESTAMP_PADDING
                    }
                  />
                  <Resolution
                    asIcon={
                      props.pluginConfig.cards__sceneCard__resolutionAsIcon ??
                      DEFAULT.CARDS.SCENE_CARD.RESOLUTION_AS_ICON
                    }
                    context="modal"
                    resolution={[primaryFile.width, primaryFile.height]}
                  />
                </>
              )}
            </FileData>
          </KeyData>
          <Details context="modal" details={props.scene.details} />
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
