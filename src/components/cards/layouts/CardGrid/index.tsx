import React from "react";
import cx from "classnames";
import "./CardGrid.scss";

interface CardGridProps {
  cards: React.ReactNode[];
  zoomIndex: StashCardGridZoom;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const componentClass = "vui-card-grid";
  const zoomClass = componentClass + "--zoom-" + props.zoomIndex;
  const cardWrapperClass = componentClass + "__card-wrapper";

  const classes = cx(componentClass, zoomClass);

  return (
    <div className={classes}>
      {props.cards.map((ob, i) => (
        <div className={cardWrapperClass} key={i}>
          {ob}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
