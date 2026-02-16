import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip as BsTooltip } from "react-bootstrap";
import { useIntl } from "react-intl";
import { DEFAULT } from "@/constants";
import { getRenderData, getStashFaIcon } from "@/helpers";

interface OrganizedProps {
  organized: boolean;
}

const Organized: React.FC<
  DataComponentProps<OrganizedProps> | DataComponentModalProps<OrganizedProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.organized
      : getRenderData({
          data: props.organized,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__organized";

  // Use an empty string as the tooltip ID to satisfy required prop, but stop
  // `aria-describedby`. This is not needed due to the `.sr-only` text.
  const tooltipID = "";

  return (
    <OverlayTrigger
      overlay={
        <BsTooltip id={tooltipID}>
          {intl.formatMessage({ id: "organized" })}
        </BsTooltip>
      }
      placement={DEFAULT.UI.TOOLTIP_POSITION}
    >
      <span className={componentClass}>
        <FontAwesomeIcon icon={getStashFaIcon("organized")} />
        <span className="sr-only">
          {intl.formatMessage({ id: "organized" })}
        </span>
      </span>
    </OverlayTrigger>
  );
};

export default Organized;
