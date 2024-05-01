import { FC, useEffect } from "react";
import type { TAllSitesContainerProps } from "./AllSites.types";
import AllSitesView from "./AllSites.view";
import AuthStore from "@store/AuthStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const AllSitesContainer: FC<TAllSitesContainerProps> = observer(props => {
  const initialUserForm = AuthStore.initialUserState;

  useEffect(() => {
    (async () => await AuthStore.getProfile())();
  }, []);

  return (
    <AllSitesView
      navigate={useNavigate()}
      cards={initialUserForm?.sites}
      userName={initialUserForm?.email}
    />
  );
});

export default AllSitesContainer;
