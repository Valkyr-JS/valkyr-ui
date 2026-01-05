import React from "react";
import { Card } from "react-bootstrap";

export const SceneCard: React.FC<ISceneCardProps> = (props) => {
  console.log("props: ", props);
  return <Card>Scene Card</Card>;
};
