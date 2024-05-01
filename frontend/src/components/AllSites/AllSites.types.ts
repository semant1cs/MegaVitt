import { NavigateFunction } from "react-router-dom";

export type UserState = {
  id?: string;
  roles?: UserRole[];
  username?: string;
  email?: string;

  /** Моковые данные. Потом убрать */
  sites?: UserSite[];
};

export type UserRole = {
  id: string;
  description: string;
  value: string;
};

/** Моковые данные. Потом убрать */
export type UserSite = {
  id: number;
  title: string;
  image_url: string;
  url_link: string;
};

export type TAllSitesContainerProps = {};
export type TAllSitesViewProps = {
  userName?: string;
  cards?: UserSite[];
  navigate: NavigateFunction;
};

export type TCardProps = {
  card: UserSite;
};
