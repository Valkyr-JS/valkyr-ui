import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "react-intl";
import Tooltip from "@/components/shared/Tooltip";
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

  return (
    <Tooltip
      componentClassList={componentClass}
      title={intl.formatMessage({ id: "organized" })}
    >
      <FontAwesomeIcon icon={getStashFaIcon("organized")} />
      <span className="sr-only">{intl.formatMessage({ id: "organized" })}</span>
    </Tooltip>
  );
};

export default Organized;
