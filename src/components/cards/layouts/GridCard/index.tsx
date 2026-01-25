import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTag } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Card } from "react-bootstrap";
import { useIntl } from "react-intl";
import CardTitle from "../Title";
import TopLine from "../TopLine";
import "./GridCard.scss";
import { DEFAULT } from "@/constants";

interface GridCardProps {
  /** Optional classes added alongside the `vui-grid-card` component class. */
  classname?: string;

  /** Footer props */
  footer: CardFooterProps;

  /** HTML ID used for aria labelling. */
  id: string;

  /** The link to the object page. */
  link: string;

  /** Event to fire when the card is no longer being hovered over. */
  onMouseOut?: React.MouseEventHandler<HTMLDivElement>;

  /** Event to fire when the card is being hovered over. */
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

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
      data-testid="grid-card"
      onMouseOut={props.onMouseOut}
      onMouseOver={props.onMouseOver}
    >
      {props.thumbnail}
      <div className={contentClass}>
        <CardTitle id={props.id} link={props.link} text={props.title} />
        <TopLine>{props.topLine}</TopLine>
        <div className={bodyClass}>{props.children}</div>
        <CardFooter {...props.footer} />
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

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The sections available to the modal */
  sections: CardModalSectionData[];

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;
}

const CardFooter: React.FC<CardFooterProps> = (props) => {
  const intl = useIntl();

  const componentClass = "vui-grid-card";
  const footerClass = componentClass + "__footer";

  const handleOpenDetailsSection = () => {
    props.setSection("details");
    props.openHandler();
  };

  const handleOpenTagsSection = () => {
    props.setSection("tags");
    props.openHandler();
  };

  return (
    <div className={footerClass}>
      {props.sections.find((s) => s[0] === "details") && (
        <button
          type="button"
          className="minimal btn"
          onClick={handleOpenDetailsSection}
          title={intl.formatMessage({ id: "details" })}
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
      )}
      {props.sections.find((s) => s[0] === "tags") && (
        <button
          type="button"
          className="minimal btn"
          onClick={handleOpenTagsSection}
          title={intl.formatMessage({ id: "tags" })}
        >
          <FontAwesomeIcon icon={faTag} />
          {(props.pluginConfig.cards__shared__enableCounts ??
          DEFAULT.CARDS.SHARED.ENABLE_FOOTER_BUTTON_COUNTS) ? (
            <span aria-hidden>
              {props.sections.find((s) => s[0] === "tags")?.[1]}
            </span>
          ) : null}
        </button>
      )}
    </div>
  );
};
