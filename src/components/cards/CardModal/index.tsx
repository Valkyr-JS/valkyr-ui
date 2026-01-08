import React from "react";
import { Modal } from "react-bootstrap";
import { CLASSNAME } from "@/constants";
import CardTitle from "../Title";
import "./CardModal.scss";
import { useIntl } from "react-intl";

interface ValkyrUiCardModalProps {
  closeHandler: () => void;
  link: string;
  show: boolean;
  thumbnail: React.ReactNode;
  title: string;
}

const CardModal: React.FC<ValkyrUiCardModalProps> = (props) => {
  const intl = useIntl();
  const componentClass = CLASSNAME.NAMESPACE + "__card-modal";

  return (
    <Modal className={componentClass} show={props.show}>
      <Modal.Header>{props.thumbnail}</Modal.Header>
      <Modal.Body>
        <CardTitle link={props.link} text={props.title} />
      </Modal.Body>
      <Modal.Footer>
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
