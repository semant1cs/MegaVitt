import { FC } from "react";
import type { TCreatorContainerProps } from "./Creator.types";
import CreatorView from "./Creator.view";
import { observer } from "mobx-react-lite";
import LayoutHeader from "@layout/Header";

/** Контейнерная компонента для отдачи вьюхи <CreatorView />*/
const CreatorContainer: FC<TCreatorContainerProps> = props => {
  return (
    <>
      <LayoutHeader />

      <CreatorView {...props} />
    </>
  );
};

export { CreatorContainer };
