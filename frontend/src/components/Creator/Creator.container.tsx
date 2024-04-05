import { FC } from "react";
import type { TCreatorContainerProps } from "./Creator.types";
import CreatorView from "./Creator.view";

/** Контейнерная компонента для отдачи вьюхи <CreatorView />*/
const CreatorContainer: FC<TCreatorContainerProps> = props => {
    return (<CreatorView />);
}
 
export default CreatorContainer;