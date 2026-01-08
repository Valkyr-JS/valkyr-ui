import React from "react";
import { getTitleFromObject, makeSceneUrl } from "@/helpers";
import GridCard from "../GridCard";
import { CLASSNAME } from "@/constants";
import "./SceneCard.scss";

interface ValkyrUiSceneCardProps {
  continuePlaylist?: Maybe<boolean> | undefined;
  index?: ISceneCardProps["index"];
  queue?: ISceneCardProps["queue"];
  scene: SlimSceneDataFragment;
}

const SceneCard: React.FC<ValkyrUiSceneCardProps> = (props) => {
  console.log(`props - '${props.scene.title || props.scene.id}': `, props);

  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  return (
    <GridCard
      link={sceneLink}
      thumbnail={
        <SceneCardThumbnail
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
  link: string;
  src: string;
}

export const SceneCardThumbnail: React.FC<SceneCardThumbnailProps> = (
  props
) => {
  const componentClass = CLASSNAME.NAMESPACE + "__scene-card-thumbnail";
  const previewClass = CLASSNAME.NAMESPACE + "__scene-card-thumbnail-preview";

  return (
    <div className={componentClass}>
      <a href={props.link}>
        <div className={previewClass}>
          <img loading="lazy" alt="" src={props.src} />
        </div>
      </a>
    </div>
  );
};
