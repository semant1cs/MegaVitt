import { NavigateFunction } from "react-router-dom";

export type TStartPageContainerProps = {};

export type TStartPageViewProps = {
  onHandleLogout: () => void;
};

export type TWelcomeProps = {
  navigate: NavigateFunction;
};
