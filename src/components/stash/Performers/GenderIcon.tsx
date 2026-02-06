import React from "react";
import {
  faMars,
  faNonBinary,
  faTransgenderAlt,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { useIntl } from "react-intl";
import { getPerformerGenderColorClass } from "@/helpers";

interface IIconProps {
  gender: Maybe<GenderEnum>;
  className?: string;
}

const GenderIcon: React.FC<IIconProps> = ({ gender, ...props }) => {
  const intl = useIntl();
  if (gender) {
    const icon = getPerformerGenderIcon(gender);

    const genderClass = getPerformerGenderColorClass(gender);
    const classList = cx(genderClass, props.className);

    return (
      <span className={classList}>
        <FontAwesomeIcon data-gender={gender} icon={icon} />
        <span className="sr-only">
          {intl.formatMessage({ id: "gender_types." + gender })}
        </span>
      </span>
    );
  }
  return null;
};

export default GenderIcon;

const getPerformerGenderIcon = (gender?: Maybe<GenderEnum>) => {
  switch (gender) {
    case "FEMALE":
      return faVenus;
    case "MALE":
      return faMars;
    case "NON_BINARY":
      return faNonBinary;
    default:
      return faTransgenderAlt;
  }
};
