import { FC } from "react";
import type { TTemplateContainerProps } from "../Initialization.types";
import TemplateView from "./Template.view";

const TemplateContainer: FC<TTemplateContainerProps> = props => {
  return <TemplateView />;
};

export { TemplateContainer };
