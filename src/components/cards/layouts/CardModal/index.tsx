import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import KeyData from "../KeyData";
import CardTitle from "../Title";
import TopLine from "../TopLine";
import "./CardModal.scss";

export interface CardModalContentProps {
  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** The data components to be displayed as key data. */
  keyData?: React.ReactNode;

  /** The link to the object page. */
  link: string;

  /** The currently displayed modal section. */
  section: CardModalSection;

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

export const CardModalContent: React.FC<CardModalContentProps> = (props) => {
  const intl = useIntl();
  const handleSetDetailsSection = () => props.setSection("details");

  return (
    <>
      <Modal.Header>{props.thumbnail}</Modal.Header>
      <Modal.Body>
        <CardTitle id={props.titleID} link={props.link} text={props.title} />
        <TopLine>{props.topLine}</TopLine>
        <KeyData>{props.keyData}</KeyData>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            className="minimal btn"
            onClick={handleSetDetailsSection}
            title={intl.formatMessage({ id: "details" })}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
        </div>
        <div>
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

interface CardModalWrapperProps {
  /** Whether the modal is currently rendered. */
  show: boolean;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const CardModalWrapper: React.FC<
  PropsWithChildren<CardModalWrapperProps>
> = (props) => {
  const componentClass = "vui-card-modal";

  return (
    <Modal
      className={componentClass}
      show={props.show}
      aria-labelledby={props.titleID}
    >
      {props.children}
    </Modal>
  );
};
