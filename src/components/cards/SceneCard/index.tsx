import React from "react";
import { getTitleFromObject, makeSceneUrl } from "@/helpers";
import GridCard from "../GridCard";

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
      imgSrc={props.scene.paths.screenshot ?? ""}
      link={sceneLink}
      objectType="scene"
      title={title}
    />
  );
};

export default SceneCard;
