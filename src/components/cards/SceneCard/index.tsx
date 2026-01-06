import React from "react";
import cx from "classnames";
import { Card } from "react-bootstrap";
import "./SceneCard.scss";

export const SceneCard: React.FC<ISceneCardProps> = (props) => {
  console.log("props: ", props);
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
