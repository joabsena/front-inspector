import { FunctionComponent, Fragment } from "react";
import { InspectorProperties } from "./Inspector.types";
import { UseInspector } from "./Inspector.hook";

export const Inspector: FunctionComponent<InspectorProperties> = ({
  children,
  disabled,
}) => {
  const { handleOnMouseOver } = UseInspector();

  if (disabled) {
    return <Fragment>{children}</Fragment>;
  }

  return <span onMouseOver={handleOnMouseOver}>{children}</span>;
};
