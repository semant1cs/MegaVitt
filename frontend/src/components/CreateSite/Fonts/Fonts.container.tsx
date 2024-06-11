import React from "react";
import { TFontsContainerProps } from "./Fonts.types";
import FontsView from "./Fonts.view";

const FontsContainer: React.FC<TFontsContainerProps> = props => {
  return <FontsView {...props} />;
};

export { FontsContainer };
