import React from "react";
import { Card } from "react-bootstrap";
import { CLASSNAME } from "@/constants";
import CardTitle from "../Title";
import "./GridCard.scss";

interface ValkyrUiGridCardProps {
  /** HTML ID used for aria labelling. */
  id: string;

  /** The link to the object page. */
  link: string;

  /** A component used for displaying the object thumbnail. */
  thumbnail: React.ReactNode;

  /** The title text. */
  title: string;
}

const GridCard: React.FC<ValkyrUiGridCardProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__grid-card";
  const bodyClass = CLASSNAME.NAMESPACE + "__grid-card-body";

  return (
    <Card className={componentClass}>
      {props.thumbnail}
      <div className={bodyClass}>
        <CardTitle id={props.id} link={props.link} text={props.title} />
      </div>
    </Card>
  );
};

export default GridCard;
