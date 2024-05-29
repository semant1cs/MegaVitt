import { FC } from "react";
import type { TAllSitesContainerProps } from "./AllSites.types";
import AllSitesView from "./AllSites.view";
import { observer } from "mobx-react-lite";
import { auth } from "@store/AuthStore";

const AllSitesContainer: FC<TAllSitesContainerProps> = observer(props => {
  const initialUserForm = auth.initialUserState;

  return <AllSitesView cards={initialUserForm?.sites} />;
});

export default AllSitesContainer;
