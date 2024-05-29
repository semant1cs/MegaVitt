import { FC } from "react";
import type { TStartPageContainerProps } from "./StartPage.types";
import StartPageView from "./StartPage.view";
import AuthStore from "@store/AuthStore";
import { useNavigate } from "react-router-dom";

/** Контейнерная компонента для отдачи вьюхи <StartPageView /> */
const StartPageContainer: FC<TStartPageContainerProps> = () => {
  const navigate = useNavigate();

  const logOut = () => {
    AuthStore.logOut().then(() => navigate("/"));
  };

  return <StartPageView onHandleLogout={logOut} />;
};

export default StartPageContainer;
