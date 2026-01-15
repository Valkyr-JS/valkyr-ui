import React, { PropsWithChildren } from "react";
import cx from "classnames";

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Settings/Inputs.tsx#L24 */
const Setting: React.FC<PropsWithChildren<ISetting>> = (props) => {
  function renderHeading() {
    return props.id === undefined ? (
      <span title={props.tooltip}>{props.heading}</span>
    ) : (
      <label title={props.tooltip} htmlFor={props.id}>
        {props.heading}
      </label>
    );
  }

  function renderSubHeading() {
    if (props.subHeading) {
      return <div className="sub-heading">{props.subHeading}</div>;
    }
  }

  const classes = cx("setting", props.className, {
    disabled: props.disabled,
  });

  return (
    <div className={classes} onClick={props.onClick}>
      <div>
        {renderHeading()}
        {renderSubHeading()}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Setting;
