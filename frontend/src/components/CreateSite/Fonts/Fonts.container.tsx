import React from "react";
import { TFontsContainerProps } from "./Fonts.types";
import FontsView from "./Fonts.view";

const FontsContainer: React.FC<TFontsContainerProps> = props => {
  function handleUserFonts() {}

  function handleSaveFonts() {}

  return (
    <FontsView
      {...props}
      handleUserFonts={handleUserFonts}
      handleSaveFonts={handleSaveFonts}
    />
  );
};

export { FontsContainer };
