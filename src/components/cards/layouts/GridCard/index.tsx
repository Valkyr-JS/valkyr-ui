import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTag } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Card } from "react-bootstrap";
import { useIntl } from "react-intl";
import CardTitle from "../Title";
import TopLine from "../TopLine";
import "./GridCard.scss";

interface GridCardProps {
  /** Optional classes added alongside the `vui-grid-card` component class. */
  classname?: string;

  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: CardFooterProps;

  /** HTML ID used for aria labelling. */
  id: string;

  /** The link to the object page. */
  link: string;

  /** Event to fire when the card is no longer being hovered over. */
  onMouseOut?: React.MouseEventHandler<HTMLDivElement>;

  /** Event to fire when the card is being hovered over. */
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;

  /** A component used for displaying the object thumbnail. */
  thumbnail: React.ReactNode;

  /** The title text. */
  title: string;

  /** The data components to be displayed on the top line. */
  topLine?: React.ReactNode;
}

const GridCard: React.FC<PropsWithChildren<GridCardProps>> = (props) => {
  const componentClass = "vui-grid-card";
  const bodyClass = componentClass + "__body";
  const contentClass = componentClass + "__content";
  const componentClassList = cx(componentClass, props.classname);

  return (
    <Card
      className={componentClassList}
      onMouseOut={props.onMouseOut}
      onMouseOver={props.onMouseOver}
    >
      {props.thumbnail}
      <div className={contentClass}>
        <CardTitle id={props.id} link={props.link} text={props.title} />
        <TopLine>{props.topLine}</TopLine>
        <div className={bodyClass}>{props.children}</div>
        {props.footer && <CardFooter {...props.footer} />}
      </div>
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

  const handleOpenTagsSection = () => {
    if (props.setData !== undefined) props.setData();
    props.setSection("tags");
    props.openHandler();
  };

  return (
    <div className={footerClass}>
      <button
        type="button"
        className="minimal btn"
        onClick={handleOpenDetailsSection}
        title={intl.formatMessage({ id: "details" })}
      >
        <FontAwesomeIcon icon={faCircleInfo} />
      </button>
      <button
        type="button"
        className="minimal btn"
        onClick={handleOpenTagsSection}
        title={intl.formatMessage({ id: "tags" })}
      >
        <FontAwesomeIcon icon={faTag} />
      </button>
    </div>
  );
};
