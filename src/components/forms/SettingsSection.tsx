import React, { PropsWithChildren } from "react";
import { Card } from "react-bootstrap";

interface ISettingGroup {
  id: string;
  heading: string;
}

export const SettingSection: React.FC<PropsWithChildren<ISettingGroup>> = ({
  id,
  children,
  heading,
}) => {
  return (
    <div className="setting-section" id={id}>
      <h2>{heading ? heading : undefined}</h2>
      <Card>{children}</Card>
    </div>
  );
};
