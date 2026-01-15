import React from "react";
import "./Title.scss";

interface CardTitleProps {
  /** HTML ID used for aria labelling. */
  id?: string;

  /** The link to the object page. */
  link: string;

  /** The title text. */
  text: string;
}

const CardTitle: React.FC<CardTitleProps> = (props) => {
  const componentClass = "vui-card-title";

  return (
    <a href={props.link} className={componentClass} id={props.id}>
      <h5>{props.text}</h5>
    </a>
  );
};

export default CardTitle;
