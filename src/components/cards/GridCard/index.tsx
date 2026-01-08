import React from "react";
import { Card } from "react-bootstrap";
import { CLASSNAME } from "@/constants";
import CardTitle from "../Title";
import "./GridCard.scss";

interface ValkyrUiGridCardProps {
  link: string;
  objectType: "gallery" | "scene";
  thumbnail: React.ReactNode;
  title: string;
}

const GridCard: React.FC<ValkyrUiGridCardProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__grid-card";
  const bodyClass = CLASSNAME.NAMESPACE + "__grid-card-body";

  return (
    <Card className={componentClass}>
      {props.thumbnail}
      <div className={bodyClass}>
        <CardTitle link={props.link} text={props.title} />
      </div>
    </Card>
  );
};

export default GridCard;
