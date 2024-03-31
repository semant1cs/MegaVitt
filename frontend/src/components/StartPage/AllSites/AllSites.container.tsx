import { FC } from "react";
import type { TAllSitesContainerProps } from "./AllSites.types";
import AllSitesView from "./AllSites.view";

const AllSitesContainer: FC<TAllSitesContainerProps> = props => {
  return <AllSitesView />;
};

export { AllSitesContainer };
