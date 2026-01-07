import React, { PropsWithChildren } from "react";

const CardGrid: React.FC<PropsWithChildren> = (props) => (
  <div className="row justify-content-center">{props.children}</div>
);

export default CardGrid;
