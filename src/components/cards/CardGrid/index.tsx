import React from "react";
import cx from "classnames";

interface CardGridProps {
  cards: React.ReactNode[];
  zoomIndex: 0 | 1 | 2 | 3;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const classes = cx("col-12", "col-md-6");
  return (
    <div className="row justify-content-center">
      {props.cards.map((ob, i) => (
        <div className={classes} key={i}>
          {ob}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
