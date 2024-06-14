import React from "react";
import { TColorsContainerProps } from "./Colors.types";
import ColorsView from "./Colors.view";

const ColorsContainer: React.FC<TColorsContainerProps> = props => {
  function handleUserColors() {}

  function handleSaveColors() {}

  return (
    <ColorsView
      {...props}
      handleUserColors={handleUserColors}
      handleSaveColors={handleSaveColors}
    />
  );
};

export { ColorsContainer };
