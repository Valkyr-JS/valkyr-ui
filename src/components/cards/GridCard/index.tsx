import React from "react";
import { Card } from "react-bootstrap";
import { CLASSNAME } from "@/constants";
import CardTitle from "../Title";
import CardThumbnail from "../Thumbnail";
import "./GridCard.scss";

interface ValkyrUiGridCardProps {
  imgSrc: string;
  link: string;
  objectType: "gallery" | "scene";
  title: string;
}

const GridCard: React.FC<ValkyrUiGridCardProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__grid-card";
  const bodyClass = CLASSNAME.NAMESPACE + "__grid-card-body";

  return (
    <Card className={componentClass}>
      <CardThumbnail
        link={props.link}
        objectType={props.objectType}
        src={props.imgSrc}
      />
      <div className={bodyClass}>
        <CardTitle link={props.link} text={props.title} />
      </div>
    </Card>
  );
};

export default GridCard;
