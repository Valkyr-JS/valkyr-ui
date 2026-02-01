import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import { DEFAULT } from "@/constants";
import CardTitle from "../Title";
import TopLine from "../TopLine";
import "./CardModal.scss";

export interface CardModalNavigation {
  next: {
    disabled: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };
  prev: {
    disabled: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };
}
export interface CardModalContentProps {
  /** Optional classes added alongside the `vui-card-modal` component class. */
  classname?: string;

  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** The link to the object page. */
  link: string;

  /** Properties required for navigating in the modal. */
  navigation?: CardModalNavigation;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** The sections available to the modal */
  sections: CardModalSectionData[];

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** A component used for displaying the object thumbnail. */
  thumbnail: React.ReactNode;

  /** The title text. */
  title: string;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;

  /** The data components to be displayed on the top line. */
  topLine?: React.ReactNode;
}

export const CardModalContent: React.FC<
  PropsWithChildren<CardModalContentProps>
> = (props) => {
  const intl = useIntl();
  const handleSetDetailsSection = () => props.setSection("details");
  const handleSetPerformersSection = () => props.setSection("performers");
  const handleSetTagsSection = () => props.setSection("tags");
  const componentClass = "vui-card-modal";
  const bodyClass = componentClass + "__body";
  const footerButtonsContainerClass = componentClass + "__footer-buttons";

  return (
    <>
      <Modal.Header>{props.thumbnail}</Modal.Header>
      <Modal.Body>
        <CardTitle id={props.titleID} link={props.link} text={props.title} />
        <TopLine>{props.topLine}</TopLine>
        <div className={bodyClass}>{props.children}</div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          {props.sections.find((s) => s[0] === "details") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetDetailsSection}
              title={intl.formatMessage({ id: "details" })}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </button>
          )}
          {props.sections.find((s) => s[0] === "performers") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetPerformersSection}
              title={intl.formatMessage({ id: "performers" })}
            >
              <FontAwesomeIcon icon={faUser} />
              {(props.pluginConfig.cards__shared__enableCounts ??
              DEFAULT.CARDS.SHARED.ENABLE_FOOTER_BUTTON_COUNTS) ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "performers")?.[1]}
                </span>
              ) : null}
            </button>
          )}
          {props.sections.find((s) => s[0] === "tags") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetTagsSection}
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
        <div className={footerButtonsContainerClass}>
          {props.navigation ? (
            <>
              <button
                className="btn btn-secondary"
                disabled={props.navigation.prev.disabled}
                onClick={props.navigation.prev.onClick}
                type="button"
              >
                {intl.formatMessage({ id: "pagination.previous" })}
              </button>
              <button
                className="btn btn-secondary"
                disabled={props.navigation.next.disabled}
                onClick={props.navigation.next.onClick}
                type="button"
              >
                {intl.formatMessage({ id: "pagination.next" })}
              </button>
            </>
          ) : null}
          <button
            className="btn btn-secondary"
            onClick={props.closeHandler}
            type="button"
          >
            {intl.formatMessage({ id: "actions.close" })}
          </button>
        </div>
      </Modal.Footer>
    </>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Wrapper                                            */
/* ---------------------------------------------------------------------------------------------- */

interface CardModalWrapperProps {
  /** Optional classes added alongside the `vui-card-modal` component class. */
  classname?: string;

  /** Whether the modal is currently rendered. */
  show: boolean;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const CardModalWrapper: React.FC<
  PropsWithChildren<CardModalWrapperProps>
> = (props) => {
  const componentClass = "vui-card-modal";
  const componentClassList = cx(componentClass, props.classname);

  return (
    <Modal
      aria-labelledby={props.titleID}
      className={componentClassList}
      scrollable
      show={props.show}
    >
      {props.children}
    </Modal>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                       Performers section                                       */
/* ---------------------------------------------------------------------------------------------- */

interface CardModalPerformersSectionProps {
  performers: { id: Performer["id"]; name: Performer["name"] }[];
}

export const CardModalPerformersSection: React.FC<
  CardModalPerformersSectionProps
> = (props) => {
  return <div>Performers section</div>;
};

/* ---------------------------------------------------------------------------------------------- */
/*                                          Tags section                                          */
/* ---------------------------------------------------------------------------------------------- */

interface CardModalTagsSectionProps {
  tags: { id: Tag["id"]; name: Tag["name"] }[];
}

export const CardModalTagsSection: React.FC<CardModalTagsSectionProps> = (
  props,
) => {
  // Simple tag fallback for when plugin API isn't available, e.g. storybook
  const TagLink = window.PluginApi?.components
    ? window.PluginApi?.components.TagLink
    : (props: { tag: { id: string; name: string } }) => (
        <span className="tag-item">{props.tag.name}</span>
      );

  return (
    <div>
      {props.tags.map((t) => {
        return <TagLink tag={t} />;
      })}
    </div>
  );
};
