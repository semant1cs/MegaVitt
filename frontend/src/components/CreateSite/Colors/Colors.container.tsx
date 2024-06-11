import React from "react";
import { TColorsContainerProps } from "./Colors.types";
import ColorsView from "./Colors.view";

const ColorsContainer: React.FC<TColorsContainerProps> = props => {
  return <ColorsView {...props} />;
};

export { ColorsContainer };
