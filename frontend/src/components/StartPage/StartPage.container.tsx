import { FC } from "react";
import type { TStartPageContainerProps } from "./StartPage.types";
import StartPageView from "./StartPage.view";

/** Контейнерная компонента для отдачи вьюхи <StartPageView /> */
const StartPageContainer: FC<TStartPageContainerProps> = () => {

  return <StartPageView />;
};

export default StartPageContainer;
