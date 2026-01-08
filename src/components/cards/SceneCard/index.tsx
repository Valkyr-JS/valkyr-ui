import React from "react";
import { Card } from "react-bootstrap";
import { getTitleFromObject, makeSceneUrl } from "@/helpers";
import CardTitle from "../Title";
import CardThumbnail from "../Thumbnail";

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
    <Card>
      <CardThumbnail
        link={sceneLink}
        objectType="scene"
        src={props.scene.paths.screenshot ?? ""}
      />
      <CardTitle link={sceneLink} text={title} />
    </Card>
  );
};

export default SceneCard;
