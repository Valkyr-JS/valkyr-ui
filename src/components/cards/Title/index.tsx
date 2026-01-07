import { CLASSNAME } from "@/constants";
import React from "react";
import "./Title.scss";

interface CardTitleProps {
  link: string;
  text: string;
}

const CardTitle: React.FC<CardTitleProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__card-title";

  return (
    <a href={props.link} className={componentClass}>
      <h5>{props.text}</h5>
    </a>
  );
};

export default CardTitle;
