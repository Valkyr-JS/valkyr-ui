import React, { useState } from "react";
import { Button, Form, Modal, ModalProps } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";

interface IModalSetting<T> extends ISetting {
  value: T | undefined;
  buttonText?: string;
  buttonTextID?: string;
  onChange: (v: T) => void;
  renderField: (
    value: T | undefined,
    setValue: (v?: T) => void,
    error?: string,
  ) => JSX.Element;
  renderValue?: (v: T | undefined) => JSX.Element;
  modalProps?: ModalProps;
  validateChange?: (v: T) => void | undefined;
}

interface IModalSetting<T> extends ISetting {
  value: T | undefined;
  buttonText?: string;
  buttonTextID?: string;
  onChange: (v: T) => void;
  renderField: (
    value: T | undefined,
    setValue: (v?: T) => void,
    error?: string,
  ) => JSX.Element;
  renderValue?: (v: T | undefined) => JSX.Element;
  modalProps?: ModalProps;
  validateChange?: (v: T) => void | undefined;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Settings/Inputs.tsx#L367 */
const ModalSetting = <T extends {}>(props: IModalSetting<T>) => {
  const {
    id,
    className,
    value,
    headingID,
    heading,
    subHeadingID,
    subHeading,
    onChange,
    renderField,
    renderValue,
    buttonText,
    buttonTextID,
    modalProps,
    disabled,
    validateChange,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>();

  function onClose(v: T | undefined) {
    setError(undefined);
    if (v !== undefined) {
      if (validateChange) {
        try {
          validateChange(v);
        } catch (e) {
          setError((e as Error).message);
          return;
        }
      }

      onChange(v);
    }
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        <SettingModal<T>
          headingID={headingID}
          subHeadingID={subHeadingID}
          heading={heading}
          subHeading={subHeading}
          value={value}
          renderField={renderField}
          close={onClose}
          error={error}
          {...modalProps}
        />
      ) : undefined}

      <ChangeButtonSetting<T>
        id={id}
        className={className}
        disabled={disabled}
        buttonText={buttonText}
        buttonTextID={buttonTextID}
        headingID={headingID}
        heading={heading}
        subHeadingID={subHeadingID}
        subHeading={subHeading}
        value={value}
        onChange={() => setShowModal(true)}
        renderValue={renderValue}
      />
    </>
  );
};

export default ModalSetting;

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Settings/Inputs.tsx#L288 */
const SettingModal = <T extends {}>(props: ISettingModal<T>) => {
  const {
    heading,
    headingID,
    subHeading,
    subHeadingID,
    value,
    close,
    renderField,
    modalProps,
    validate,
    error,
  } = props;

  const intl = useIntl();
  const [currentValue, setCurrentValue] = useState<T | undefined>(value);

  return (
    <Modal show onHide={() => close()} id="setting-dialog" {...modalProps}>
      <Form
        onSubmit={(e) => {
          close(currentValue);
          e.preventDefault();
        }}
      >
        <Modal.Header closeButton>
          {headingID ? <FormattedMessage id={headingID} /> : heading}
        </Modal.Header>
        <Modal.Body>
          {renderField(currentValue, setCurrentValue, error)}
          {subHeadingID ? (
            <div className="sub-heading">
              {intl.formatMessage({ id: subHeadingID })}
            </div>
          ) : subHeading ? (
            <div className="sub-heading">{subHeading}</div>
          ) : undefined}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => close()}>
            <FormattedMessage id="actions.cancel" />
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => close(currentValue)}
            disabled={
              currentValue === undefined ||
              (validate && !validate(currentValue))
            }
          >
            <FormattedMessage id="actions.confirm" />
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export interface ISettingModal<T> {
  heading?: React.ReactNode;
  headingID?: string;
  subHeadingID?: string;
  subHeading?: React.ReactNode;
  value: T | undefined;
  close: (v?: T) => void;
  renderField: (
    value: T | undefined,
    setValue: (v?: T) => void,
    error?: string,
  ) => JSX.Element;
  modalProps?: ModalProps;
  validate?: (v: T) => boolean | undefined;
  error?: string | undefined;
}

interface IDialogSetting<T> extends ISetting {
  buttonText?: string;
  buttonTextID?: string;
  value?: T;
  renderValue?: (v: T | undefined) => JSX.Element;
  onChange: () => void;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Settings/Inputs.tsx#L266 */
const ChangeButtonSetting = <T extends {}>(props: IDialogSetting<T>) => {
  const {
    id,
    className,
    headingID,
    heading,
    subHeadingID,
    subHeading,
    value,
    onChange,
    renderValue,
    buttonText,
    buttonTextID,
    disabled,
  } = props;
  const intl = useIntl();

  const disabledClassName = disabled ? "disabled" : "";

  return (
    <div className={`setting ${className ?? ""} ${disabledClassName}`} id={id}>
      <div>
        <h3>
          {headingID
            ? intl.formatMessage({ id: headingID })
            : heading
              ? heading
              : undefined}
        </h3>

        <div className="value">
          {renderValue ? renderValue(value) : undefined}
        </div>

        {subHeadingID ? (
          <div className="sub-heading">
            {intl.formatMessage({ id: subHeadingID })}
          </div>
        ) : subHeading ? (
          <div className="sub-heading">{subHeading}</div>
        ) : undefined}
      </div>
      <div>
        <Button onClick={() => onChange()} disabled={disabled}>
          {buttonText ? (
            buttonText
          ) : (
            <FormattedMessage id={buttonTextID ?? "actions.edit"} />
          )}
        </Button>
      </div>
    </div>
  );
};
