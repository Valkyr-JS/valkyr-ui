import React, { PropsWithChildren } from "react";
import "./FileData.scss";

const FileData: React.FC<PropsWithChildren> = (props) => {
  if (!props.children) return null;

  const componentClass = "vui-card-file-data";
  return <div className={componentClass}>{props.children}</div>;
};

export default FileData;
