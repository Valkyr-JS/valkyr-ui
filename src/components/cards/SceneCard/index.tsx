import React from "react";
import { Card } from "react-bootstrap";

interface ValkyrUiSceneCardProps {
  scene: SlimSceneDataFragment;
}

const SceneCard: React.FC<ValkyrUiSceneCardProps> = (props) => {
  console.log(`props - '${props.scene.title || props.scene.id}': `, props);
  return <Card>Scene Card</Card>;
};

export default SceneCard;
