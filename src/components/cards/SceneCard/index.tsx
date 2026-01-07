import React from "react";
import cx from "classnames";
import { Card } from "react-bootstrap";
import "./SceneCard.scss";

interface ValkyrUiSceneCardProps {
  scene: SlimSceneDataFragment;
  zoomIndex: ISceneCardsGrid["zoomIndex"];
}

export const SceneCard: React.FC<ValkyrUiSceneCardProps> = (props) => {
  console.log(`props - '${props.scene.title || props.scene.id}': `, props);
  const classes = cx(
    "scene-card",
    {
      [`zoom-${props.zoomIndex}`]:
        props.zoomIndex !== undefined &&
        props.zoomIndex >= 0 &&
        props.zoomIndex <= 3 &&
        Number.isInteger(props.zoomIndex),
    },
    "grid-card",
    "valkyr-scene-card"
  );
  return <Card className={classes}>Scene Card</Card>;
};
