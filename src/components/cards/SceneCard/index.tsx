import React from "react";
import { getTitleFromObject, makeSceneUrl } from "@/helpers";
import Studio from "../data/Studio";
import { CardModalContent } from "../layouts/CardModal";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
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

  /** The Stash scene data. */
  scene: SlimSceneDataFragment;

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
}

const SceneCard: React.FC<SceneCardProps> = (props) => {
  console.log(`props - '${props.scene.title || props.scene.id}': `, props);

  const id = createSceneCardID(props.scene.id);
  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  return (
    <GridCard
      footer={props.footer}
      id={id}
      link={sceneLink}
      thumbnail={
        <SceneCardThumbnail
          titleID={id}
          link={sceneLink}
          src={props.scene.paths.screenshot ?? ""}
        />
      }
      title={title}
      topLine={
        <Studio
          context="card"
          currentBreakpoint={props.zoomBreakpoint}
          studio={props.scene.studio}
          userBreakpoint={props.pluginConfig.cards__generalData__studio}
        />
      }
    />
  );
};

export default SceneCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                 Scene card thumbnail component                                 */
/* ---------------------------------------------------------------------------------------------- */

interface SceneCardThumbnailProps {
  /** The link to the object page. */
  link: string;

  /** The link to the scene cover thumbnail. */
  src: string;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const SceneCardThumbnail: React.FC<SceneCardThumbnailProps> = (
  props
) => {
  const componentClass = "vui-scene-card";
  const thumbnailClass = componentClass + "__thumbnail";
  const previewClass = componentClass + "__thumbnail-preview";

  return (
    <div className={thumbnailClass}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={previewClass}>
          <img loading="lazy" alt="" src={props.src} />
        </div>
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

  /** The scenes in the current query. */
  queue?: ISceneCardProps["queue"];

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
  props
) => {
  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      link={sceneLink}
      section={props.section}
      setSection={props.setSection}
      thumbnail={
        <SceneCardThumbnail
          titleID={props.titleID}
          link={sceneLink}
          src={props.scene.paths.screenshot ?? ""}
        />
      }
      title={title}
      titleID={props.titleID}
      topLine={<Studio context="modal" studio={props.scene.studio} />}
    />
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted scene IDs. */
export const createSceneCardID = (stashID: string) => "sceneCard-" + stashID;
