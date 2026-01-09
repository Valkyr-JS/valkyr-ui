import React from "react";
import { getTitleFromObject, makeSceneUrl } from "@/helpers";
import GridCard, { CardFooterProps } from "../GridCard";
import { CLASSNAME } from "@/constants";
import "./SceneCard.scss";
import CardModal from "../CardModal";

interface SceneCardProps {
  /** Stash user setting for whether to continue to the next scene when the
   * current one ends. */
  continuePlaylist?: Maybe<boolean> | undefined;

  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: CardFooterProps;

  /** The index of the scene in the current page query. */
  index?: ISceneCardProps["index"];

  /** The scenes in the current query. */
  queue?: ISceneCardProps["queue"];

  /** The Stash scene data. */
  scene: SlimSceneDataFragment;
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
          id={id}
          link={sceneLink}
          src={props.scene.paths.screenshot ?? ""}
        />
      }
      title={title}
    />
  );
};

export default SceneCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                 Scene card thumbnail component                                 */
/* ---------------------------------------------------------------------------------------------- */

interface SceneCardThumbnailProps {
  /** HTML ID used for aria labelling. */
  id: string;

  /** The link to the object page. */
  link: string;

  /** The link to the gallery cover thumbnail. */
  src: string;
}

export const SceneCardThumbnail: React.FC<SceneCardThumbnailProps> = (
  props
) => {
  const componentClass = CLASSNAME.NAMESPACE + "__scene-card-thumbnail";
  const previewClass = CLASSNAME.NAMESPACE + "__scene-card-thumbnail-preview";

  return (
    <div className={componentClass}>
      <a href={props.link} aria-labelledby={props.id}>
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

interface SceneCardModalProps {
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

  /** Whether the modal is currently rendered. */
  show: boolean;
}

export const SceneCardModal: React.FC<SceneCardModalProps> = (props) => {
  const id = createSceneCardID(props.scene.id) + "Modal";
  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  return (
    <CardModal
      closeHandler={props.closeHandler}
      link={sceneLink}
      section={props.section}
      setSection={props.setSection}
      show={props.show}
      thumbnail={
        <SceneCardThumbnail
          id={id}
          link={sceneLink}
          src={props.scene.paths.screenshot ?? ""}
        />
      }
      title={title}
      titleID={id}
    />
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted scene IDs. */
export const createSceneCardID = (stashID: string) => "sceneCard-" + stashID;
