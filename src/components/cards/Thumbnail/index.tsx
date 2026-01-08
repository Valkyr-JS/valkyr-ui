import React from "react";
import cx from "classnames";
import { CLASSNAME } from "@/constants";
import "./Thumbnail.scss";

interface CardThumbnailProps {
  link: string;
  objectType: "gallery" | "scene";
  src: string;
}

const CardThumbnail: React.FC<CardThumbnailProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__card-thumbnail";
  const previewClass = CLASSNAME.NAMESPACE + "__card-thumbnail-preview";
  const objectClass = componentClass + "--" + props.objectType;

  const classes = cx(componentClass, objectClass);

  return (
    <div className={classes}>
      <a href={props.link}>
        <div className={previewClass}>
          <img loading="lazy" alt="" src={props.src} />
        </div>
      </a>
    </div>
  );
};

export default CardThumbnail;
