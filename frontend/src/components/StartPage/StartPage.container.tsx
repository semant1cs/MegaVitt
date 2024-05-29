import { FC, useEffect } from "react";
import type { TStartPageContainerProps } from "./StartPage.types";
import StartPageView from "./StartPage.view";
import { observer } from "mobx-react-lite";
import { auth } from "@store/AuthStore";

/** Контейнерная компонента для определение текущей страницы */
const StartPageContainer: FC<TStartPageContainerProps> = observer(() => {
  useEffect(() => {
    if (!localStorage.getItem("userToken")) return;

    (async () => await auth.getProfile())();
  }, []);

  return <StartPageView />;
});

export default StartPageContainer;
