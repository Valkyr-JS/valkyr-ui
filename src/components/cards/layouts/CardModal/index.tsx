import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import CardTitle from "../Title";
import TopLine from "../TopLine";
import "./CardModal.scss";
import { getStashFaIcon } from "@/helpers";
import { faFileCircleInfo } from "@fortawesome/pro-solid-svg-icons";

export { default as CardModalGalleriesSection } from "./sections/CardModalGalleriesSection";
export { default as CardModalPerformersSection } from "./sections/CardModalPerformersSection";
export { default as CardModalScenesSection } from "./sections/CardModalScenesSection";
export { default as CardModalTagsSection } from "./sections/CardModalTagsSection";

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
  pluginConfig: ValkyrUiPluginConfig;

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
  const handleSetFileInfoSection = () => props.setSection("files");
  const handleSetGalleriesSection = () => props.setSection("galleries");
  const handleSetPerformersSection = () => props.setSection("performers");
  const handleSetScenesSection = () => props.setSection("scenes");
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
          {props.sections.find((s) => s[0] === "tags") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetTagsSection}
              title={intl.formatMessage({ id: "tags" })}
            >
              <FontAwesomeIcon icon={getStashFaIcon("tag")} />
              {props.pluginConfig.cards__shared__enableCounts ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "tags")?.[1]}
                </span>
              ) : null}
            </button>
          )}
          {props.sections.find((s) => s[0] === "performers") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetPerformersSection}
              title={intl.formatMessage({ id: "performers" })}
            >
              <FontAwesomeIcon icon={getStashFaIcon("performer")} />
              {props.pluginConfig.cards__shared__enableCounts ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "performers")?.[1]}
                </span>
              ) : null}
            </button>
          )}
          {props.sections.find((s) => s[0] === "scenes") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetScenesSection}
              title={intl.formatMessage({ id: "scenes" })}
            >
              <FontAwesomeIcon icon={getStashFaIcon("scene")} />
              {props.pluginConfig.cards__shared__enableCounts ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "scenes")?.[1]}
                </span>
              ) : null}
            </button>
          )}
          {props.sections.find((s) => s[0] === "galleries") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetGalleriesSection}
              title={intl.formatMessage({ id: "galleries" })}
            >
              <FontAwesomeIcon icon={getStashFaIcon("gallery")} />
              {props.pluginConfig.cards__shared__enableCounts ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "galleries")?.[1]}
                </span>
              ) : null}
            </button>
          )}
          {props.sections.find((s) => s[0] === "files") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetFileInfoSection}
              title={intl.formatMessage({ id: "file_info" })}
            >
              <FontAwesomeIcon icon={faFileCircleInfo} />
              {props.pluginConfig.cards__shared__enableCounts ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "files")?.[1]}
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

  /** The event to execute on clicking outside the modal component. */
  bgClickHandler: (() => void) | undefined;

  /** Whether modals should always be rendered at full height, irrespective of
   * content. */
  fullHeightModal: boolean;

  /** Whether the modal is currently rendered. */
  show: boolean;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const CardModalWrapper: React.FC<
  PropsWithChildren<CardModalWrapperProps>
> = (props) => {
  const componentClass = "vui-card-modal";
  const componentHeightClass = componentClass + "--full-height";
  const componentClassList = cx(
    componentClass,
    {
      [componentHeightClass]: props.fullHeightModal,
    },
    props.classname,
  );

  return (
    <Modal
      aria-labelledby={props.titleID}
      className={componentClassList}
      onHide={props.bgClickHandler}
      scrollable
      show={props.show}
    >
      {props.children}
    </Modal>
  );
};
