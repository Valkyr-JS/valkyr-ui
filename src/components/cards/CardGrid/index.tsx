import React from "react";
import cx from "classnames";
import { CLASSNAME } from "@/constants";

interface CardGridProps {
  cards: React.ReactNode[];
  zoomIndex: StashCardGridZoom;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const componentClassname = CLASSNAME.NAMESPACE + "__card-grid";
  const zoomClassname = componentClassname + "--zoom-" + props.zoomIndex;

  const classes = cx(
    "row",
    "justify-content-center",
    componentClassname,
    zoomClassname
  );
  const cardWrapperClasses = cx("col-12", "col-md-6");

  return (
    <div className={classes}>
      {props.cards.map((ob, i) => (
        <div className={cardWrapperClasses} key={i}>
          {ob}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
