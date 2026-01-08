import React from "react";
import { CLASSNAME } from "@/constants";
import "./Thumbnail.scss";

interface CardThumbnailProps {
  link: string;
  objectType: "gallery" | "scene";
  src: string;
}

const CardThumbnail: React.FC<CardThumbnailProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__card-thumbnail";

  return (
    <div className={componentClass}>
      <a href={props.link}>
        <img loading="lazy" alt="" src={props.src} />
      </a>
    </div>
  );
};

export default CardThumbnail;
