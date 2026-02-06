import React from "react";
import "./Title.scss";

interface CardTitleProps {
  /** HTML ID used for aria labelling. */
  id?: string;

  /** The link to the object page. */
  link: string;

  /** Set the `h*` tag used. Default is `h5`.  */
  size?: 1 | 2 | 3 | 4 | 6;

  /** The title text. */
  text: string;
}

const CardTitle: React.FC<CardTitleProps> = (props) => {
  const componentClass = "vui-card-title";

  const heading =
    props.size === 1 ? (
      <h1>{props.text}</h1>
    ) : props.size === 2 ? (
      <h2>{props.text}</h2>
    ) : props.size === 3 ? (
      <h3>{props.text}</h3>
    ) : props.size === 4 ? (
      <h4>{props.text}</h4>
    ) : props.size === 6 ? (
      <h6>{props.text}</h6>
    ) : (
      <h5>{props.text}</h5>
    );

  return (
    <a href={props.link} className={componentClass} id={props.id}>
      {heading}
    </a>
  );
};

export default CardTitle;
