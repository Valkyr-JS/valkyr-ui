import React from "react";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEFAULT } from "@/constants";
import { getRenderData } from "@/helpers";

interface OrganizedProps {
  organized: boolean;
}

const Organized: React.FC<
  DataComponentProps<OrganizedProps> | DataComponentModalProps<OrganizedProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.organized
      : getRenderData({
          data: props.organized,
          hideZeroValueData:
            props.hideZeroValueData ?? DEFAULT.CARDS.SHARED.HIDE_ZERO_VALUE,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__organized";

  return (
    <span className={componentClass}>
      <FontAwesomeIcon icon={faBox} />
      <span className="sr-only">Organized</span>
    </span>
  );
};

export default Organized;
