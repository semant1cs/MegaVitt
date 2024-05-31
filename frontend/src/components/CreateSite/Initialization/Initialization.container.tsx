import { FC } from "react";
import type { TInitializationContainerProps } from "./Initialization.types";
import InitilalizationView from "./Initilalization.view";

const InitializationContainer: FC<TInitializationContainerProps> = props => {
  return <InitilalizationView {...props} />;
};

export { InitializationContainer };
