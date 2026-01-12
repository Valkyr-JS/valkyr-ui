import React, { PropsWithChildren, useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Collapse } from "react-bootstrap";
import Setting from "./Setting";

interface ISetting {
  id?: string;
  className?: string;
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}

interface ISettingGroup {
  settingProps?: ISetting;
  topLevel?: JSX.Element;
  collapsible?: boolean;
  collapsedDefault?: boolean;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Settings/Inputs.tsx#L96 */
const SettingGroup: React.FC<PropsWithChildren<ISettingGroup>> = (props) => {
  const [open, setOpen] = useState(!props.collapsedDefault);

  function renderCollapseButton() {
    if (!props.collapsible) return;

    return (
      <Button
        className="setting-group-collapse-button"
        variant="minimal"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon fixedWidth icon={open ? faChevronUp : faChevronDown} />
        <span className="sr-only">
          {open ? "Close" : "Open"} settings group
        </span>
      </Button>
    );
  }

  function onDivClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!props.collapsible) return;

    // ensure button was not clicked
    let target: HTMLElement | null = e.target as HTMLElement;
    while (target && target !== e.currentTarget) {
      if (
        target.nodeName.toLowerCase() === "button" ||
        target.nodeName.toLowerCase() === "a"
      ) {
        // button clicked, swallow event
        return;
      }
      target = target.parentElement;
    }

    setOpen(!open);
  }

  return (
    <div className={`setting-group ${props.collapsible ? "collapsible" : ""}`}>
      <Setting {...props.settingProps} onClick={onDivClick}>
        {props.topLevel}
        {renderCollapseButton()}
      </Setting>
      <Collapse in={open}>
        <div className="collapsible-section">{props.children}</div>
      </Collapse>
    </div>
  );
};

export default SettingGroup;
