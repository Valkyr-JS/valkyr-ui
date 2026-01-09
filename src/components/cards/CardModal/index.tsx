import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import { CLASSNAME } from "@/constants";
import CardTitle from "../Title";
import "./CardModal.scss";

export interface ValkyrUiCardModalProps {
  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** The link to the object page. */
  link: string;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** Whether the modal is currently rendered. */
  show: boolean;

  /** A component used for displaying the object thumbnail. */
  thumbnail: React.ReactNode;

  /** The title text. */
  title: string;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

const CardModal: React.FC<ValkyrUiCardModalProps> = (props) => {
  const intl = useIntl();
  const componentClass = CLASSNAME.NAMESPACE + "__card-modal";

  const handleSetDetailsSection = () => props.setSection("details");

  return (
    <Modal
      className={componentClass}
      show={props.show}
      aria-labelledby={props.titleID}
    >
      <Modal.Header>{props.thumbnail}</Modal.Header>
      <Modal.Body>
        <CardTitle id={props.titleID} link={props.link} text={props.title} />
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
    </Modal>
  );
};

export default CardModal;
