import React from "react";
import { useIntl } from "react-intl";
import HandyIcon from "@/components/icons/HandyIcon";
import { getRenderData } from "@/helpers";

interface InteractiveProps {
  interactive: boolean;
}

const Interactive: React.FC<
  | DataComponentProps<InteractiveProps>
  | DataComponentModalProps<InteractiveProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.interactive
      : getRenderData({
          data: props.interactive,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__interactive";

  return (
    <span className={componentClass}>
      <HandyIcon />
      <span className="sr-only">
        {intl.formatMessage({ id: "interactive" })}
      </span>
    </span>
  );
};

export default Interactive;
