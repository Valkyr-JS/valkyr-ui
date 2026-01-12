import React, { PropsWithChildren } from "react";
import { Card } from "react-bootstrap";

interface ISettingGroup {
  id: string;
  heading: string;
  subHeading?: string;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Settings/SettingSection.tsx#L13 */
export const SettingSection: React.FC<PropsWithChildren<ISettingGroup>> = (
  props
) => {
  return (
    <div className="setting-section" id={props.id}>
      {props.heading ? <h2>{props.heading}</h2> : null}
      {props.subHeading ? (
        <div className="sub-heading">{props.subHeading}</div>
      ) : null}
      <Card>{props.children}</Card>
    </div>
  );
};
