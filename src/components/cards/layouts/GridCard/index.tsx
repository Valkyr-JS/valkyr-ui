import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import { useIntl } from "react-intl";
import KeyData from "../KeyData";
import CardTitle from "../Title";
import TopLine from "../TopLine";
import "./GridCard.scss";

interface GridCardProps {
  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: CardFooterProps;

  /** HTML ID used for aria labelling. */
  id: string;

  /** The data components to be displayed as key data. */
  keyData?: React.ReactNode;

  /** The link to the object page. */
  link: string;

  /** A component used for displaying the object thumbnail. */
  thumbnail: React.ReactNode;

  /** The title text. */
  title: string;

  /** The data components to be displayed on the top line. */
  topLine?: React.ReactNode;
}

const GridCard: React.FC<GridCardProps> = (props) => {
  const componentClass = "vui-grid-card";
  const bodyClass = componentClass + "__body";

  return (
    <Card className={componentClass}>
      {props.thumbnail}
      <div className={bodyClass}>
        <CardTitle id={props.id} link={props.link} text={props.title} />
        <TopLine>{props.topLine}</TopLine>
        <KeyData>{props.keyData}</KeyData>
      </div>
      {props.footer && <CardFooter {...props.footer} />}
    </Card>
  );
};

export default GridCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                      Card footer component                                     */
/* ---------------------------------------------------------------------------------------------- */

export interface CardFooterProps {
  /** Handler for opening the modal. */
  openHandler: () => void;

  /** Handler that sets data set for the modal. */
  setData?: () => void;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;
}

const CardFooter: React.FC<CardFooterProps> = (props) => {
  const intl = useIntl();

  const componentClass = "vui-grid-card";
  const footerClass = componentClass + "__footer";

  const handleOpenDetailsSection = () => {
    if (props.setData !== undefined) props.setData();
    props.setSection("details");
    props.openHandler();
  };

  return (
    <footer className={footerClass}>
      <button
        type="button"
        className="minimal btn"
        onClick={handleOpenDetailsSection}
        title={intl.formatMessage({ id: "details" })}
      >
        <FontAwesomeIcon icon={faCircleInfo} />
      </button>
    </footer>
  );
};
