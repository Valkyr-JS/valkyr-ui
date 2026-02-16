import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import CardTitle from "@/components/cards/layouts/Title";
import TopLine from "@/components/cards/layouts/TopLine";
import Tooltip from "@/components/shared/Tooltip";
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
            <Tooltip title={intl.formatMessage({ id: "details" })}>
              <button
                type="button"
                className="minimal btn"
                onClick={handleSetDetailsSection}
              >
                <FontAwesomeIcon icon={faCircleInfo} />
                <span className="sr-only">
                  {intl.formatMessage({ id: "details" })}
                </span>
              </button>
            </Tooltip>
          )}
          {props.sections.find((s) => s[0] === "tags") && (
            <Tooltip title={intl.formatMessage({ id: "tags" })}>
              <button
                type="button"
                className="minimal btn"
                onClick={handleSetTagsSection}
              >
                <FontAwesomeIcon icon={getStashFaIcon("tag")} />
                <span className="sr-only">
                  {intl.formatMessage({ id: "tags" })}
                </span>
                {props.pluginConfig.cards__shared__enableCounts ? (
                  <span aria-hidden>
                    {props.sections.find((s) => s[0] === "tags")?.[1]}
                  </span>
                ) : null}
              </button>
            </Tooltip>
          )}
          {props.sections.find((s) => s[0] === "performers") && (
            <Tooltip title={intl.formatMessage({ id: "performers" })}>
              <button
                type="button"
                className="minimal btn"
                onClick={handleSetPerformersSection}
              >
                <FontAwesomeIcon icon={getStashFaIcon("performer")} />{" "}
                <span className="sr-only">
                  {intl.formatMessage({ id: "performers" })}
                </span>
                {props.pluginConfig.cards__shared__enableCounts ? (
                  <span aria-hidden>
                    {props.sections.find((s) => s[0] === "performers")?.[1]}
                  </span>
                ) : null}
              </button>
            </Tooltip>
          )}
          {props.sections.find((s) => s[0] === "scenes") && (
            <Tooltip title={intl.formatMessage({ id: "scenes" })}>
              <button
                type="button"
                className="minimal btn"
                onClick={handleSetScenesSection}
              >
                <FontAwesomeIcon icon={getStashFaIcon("scene")} />{" "}
                <span className="sr-only">
                  {intl.formatMessage({ id: "scenes" })}
                </span>
                {props.pluginConfig.cards__shared__enableCounts ? (
                  <span aria-hidden>
                    {props.sections.find((s) => s[0] === "scenes")?.[1]}
                  </span>
                ) : null}
              </button>
            </Tooltip>
          )}
          {props.sections.find((s) => s[0] === "galleries") && (
            <Tooltip title={intl.formatMessage({ id: "galleries" })}>
              <button
                type="button"
                className="minimal btn"
                onClick={handleSetGalleriesSection}
              >
                <FontAwesomeIcon icon={getStashFaIcon("gallery")} />{" "}
                <span className="sr-only">
                  {intl.formatMessage({ id: "galleries" })}
                </span>
                {props.pluginConfig.cards__shared__enableCounts ? (
                  <span aria-hidden>
                    {props.sections.find((s) => s[0] === "galleries")?.[1]}
                  </span>
                ) : null}
              </button>
            </Tooltip>
          )}
          {props.sections.find((s) => s[0] === "files") && (
            <Tooltip title={intl.formatMessage({ id: "file_info" })}>
              <button
                type="button"
                className="minimal btn"
                onClick={handleSetFileInfoSection}
              >
                <FontAwesomeIcon icon={faFileCircleInfo} />{" "}
                <span className="sr-only">
                  {intl.formatMessage({ id: "file_info" })}
                </span>
                {props.pluginConfig.cards__shared__enableCounts ? (
                  <span aria-hidden>
                    {props.sections.find((s) => s[0] === "files")?.[1]}
                  </span>
                ) : null}
              </button>
            </Tooltip>
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

  /** Whether the object has no associated file. If it is not possible for the
   * object to have an associated file, e.g. studios, tags, do NOT mark as
   * fileless. */
  isFileless?: boolean;

  /** Whether the modal is currently rendered. */
  show: boolean;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const CardModalWrapper: React.FC<
  PropsWithChildren<CardModalWrapperProps>
> = (props) => {
  const componentClass = "vui-card-modal";
  const componentFilelessClass = componentClass + "--fileless";
  const componentHeightClass = componentClass + "--full-height";
  const componentClassList = cx(
    componentClass,
    {
      [componentHeightClass]: props.fullHeightModal,
      [componentFilelessClass]: props.isFileless,
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
