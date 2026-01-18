import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { DEFAULT } from "@/constants";
import { getFileIsPortrait, getTitleFromObject, makeSceneUrl } from "@/helpers";
import Date from "../data/Date";
import Details from "../data/Details";
import RatingBanner from "../data/RatingBanner";
import RatingIcon from "../data/RatingIcon";
import Studio from "../data/Studio";
import { CardModalContent, CardModalTagsSection } from "../layouts/CardModal";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import KeyData from "../layouts/KeyData";
import ReleaseData from "../layouts/ReleaseData";
import "./SceneCard.scss";

interface SceneCardProps {
  /** Stash user setting for whether to continue to the next scene when the
   * current one ends. */
  continuePlaylist?: Maybe<boolean> | undefined;

  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: CardFooterProps;

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
  console.log(`props - '${props.scene.title || props.scene.id}': `, props);

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

  return (
    <GridCard
      classname={componentClass}
      footer={props.footer}
      id={id}
      link={sceneLink}
      onMouseOut={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
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
            <RatingIcon
              context="card"
              currentBreakpoint={props.zoomBreakpoint}
              hideZeroValueData={props.pluginConfig.cards__data__hideZeroValue}
              rating100={props.scene.rating100}
              ratingSystem={props.ratingSystem}
              userBreakpoint={
                props.pluginConfig.cards__sceneCard__ratingIconBreakpoint ??
                DEFAULT.CARDS.SCENE_CARD.RATING_ICON_BREAKPOINT
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
  const classList = thumbnailClass;
  const previewClass = componentClass + "__thumbnail-preview";
  const previewPortraitClass = previewClass + "--portrait";
  const previewClassList = cx(previewClass, {
    [previewPortraitClass]: props.isPortrait,
  });

  const preview =
    props.context === "card" &&
    (props.pluginConfig.cards__sceneCard__previewsEnabled ??
      DEFAULT.CARDS.SCENE_CARD.PREVIEWS_ENABLED)
      ? (props.preview ?? undefined)
      : undefined;

  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.cardIsHovered) {
      // Catch is necessary due to DOMException if user hovers before clicking on page
      videoEl.current?.play().catch(() => {});
    } else videoEl.current?.pause();
  }, [props.cardIsHovered]);

  return (
    <div className={classList}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={previewClassList}>
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

  const sections: CardModalSection[] = ["details"];
  if (props.scene.tags.length) sections.push("tags");

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      link={sceneLink}
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
          titleID={props.titleID}
        />
      }
      title={title}
      titleID={props.titleID}
      topLine={
        <>
          <Studio context="modal" studio={props.scene.studio} />
          <div className={userDataClass}>
            {willRenderRatingBanner ? null : (
              <RatingIcon
                context="modal"
                rating100={props.scene.rating100}
                ratingSystem={props.ratingSystem}
              />
            )}
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
