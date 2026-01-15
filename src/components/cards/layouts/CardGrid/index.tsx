import React from "react";
import cx from "classnames";
import { CLASSNAME } from "@/constants";
import "./CardGrid.scss";

interface CardGridProps {
  cards: React.ReactNode[];
  zoomIndex: StashCardGridZoom;
}

const CardGrid: React.FC<CardGridProps> = (props) => {
  const componentClassname = CLASSNAME.NAMESPACE + "__card-grid";
  const zoomClassname = componentClassname + "--zoom-" + props.zoomIndex;

  const classes = cx(componentClassname, zoomClassname);
  const cardWrapperClassname = CLASSNAME.NAMESPACE + "__card-wrapper";

  return (
    <div className={classes}>
      {props.cards.map((ob, i) => (
        <div className={cardWrapperClassname} key={i}>
          {ob}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
