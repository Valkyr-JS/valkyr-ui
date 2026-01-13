import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import { useIntl } from "react-intl";
import { CLASSNAME } from "@/constants";
import CardTitle from "../Title";
import "./GridCard.scss";

interface GridCardProps {
  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: CardFooterProps;

  /** HTML ID used for aria labelling. */
  id: string;

  /** The link to the object page. */
  link: string;

  /** A component used for displaying the object thumbnail. */
  thumbnail: React.ReactNode;

  /** The title text. */
  title: string;

  /** The data components to be displayed on the top line. */
  topLine?: React.ReactNode[];
}

const GridCard: React.FC<GridCardProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__grid-card";
  const bodyClass = CLASSNAME.NAMESPACE + "__grid-card-body";

  return (
    <Card className={componentClass}>
      {props.thumbnail}
      <div className={bodyClass}>
        <CardTitle id={props.id} link={props.link} text={props.title} />
        {maybeRenderTopLine(props.topLine)}
      </div>
      {props.footer && <CardFooter {...props.footer} />}
    </Card>
  );
};

export default GridCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                     Card topline component                                     */
/* ---------------------------------------------------------------------------------------------- */

const maybeRenderTopLine = (
  items?: React.ReactNode[]
): React.JSX.Element | null => {
  if (!items?.length) return null;

  const componentClass = CLASSNAME.NAMESPACE + "__grid-card-top-line";

  return <div className={componentClass}>{items}</div>;
};

/* ---------------------------------------------------------------------------------------------- */
/*                                      Card footer component                                     */
/* ---------------------------------------------------------------------------------------------- */

export interface CardFooterProps {
  /** Handler for opening the modal. */
  openHandler: () => void;

  /** Handler that sets data set for the modal. */
  setData: () => void;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;
}

const CardFooter: React.FC<CardFooterProps> = (props) => {
  const intl = useIntl();
  const componentClass = CLASSNAME.NAMESPACE + "__grid-card-footer";

  const handleOpenDetailsSection = () => {
    props.setData();
    props.setSection("details");
    props.openHandler();
  };

  return (
    <footer className={componentClass}>
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
