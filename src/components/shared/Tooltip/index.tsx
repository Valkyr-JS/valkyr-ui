import React, { PropsWithChildren } from "react";
import { OverlayTrigger, Tooltip as BsTooltip } from "react-bootstrap";
import { DEFAULT } from "@/constants";

interface TooltipProps extends PropsWithChildren {
  componentClassList?: string;
  placement?: "top" | "bottom" | "left" | "right";
  title: string;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  // Use an empty string as the tooltip ID to satisfy required prop, but stop
  // `aria-describedby`. This is not needed due to the `.sr-only` text.
  const tooltipID = "";

  return (
    <OverlayTrigger
      delay={200}
      overlay={<BsTooltip id={tooltipID}>{props.title}</BsTooltip>}
      placement={props.placement ?? DEFAULT.UI.TOOLTIP_POSITION}
    >
      <span className={props.componentClassList}>{props.children}</span>
    </OverlayTrigger>
  );
};

export default Tooltip;
