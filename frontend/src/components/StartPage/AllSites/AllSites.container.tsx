import { FC, useEffect } from "react";
import type { TAllSitesContainerProps } from "./AllSites.types";
import AllSitesView from "./AllSites.view";
import AuthStore from "@store/AuthStore";
import { observer } from "mobx-react-lite";

const AllSitesContainer: FC<TAllSitesContainerProps> = observer(props => {
  const initialUserForm = AuthStore.initialUserState;

  useEffect(() => {
    (async () => await AuthStore.getProfile())();
  }, []);

  return <AllSitesView />;
});

export { AllSitesContainer };
