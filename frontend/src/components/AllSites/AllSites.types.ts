export type UserState = {
  id?: string;
  email?: string;
  avatar?: string;
  username?: string;
  roles?: UserRole[];
  sites?: UserSite[];
};

export type UserRole = {
  id: string;
  value: string;
  description: string;
};

/** Моковые данные. Потом убрать */
export type UserSite = {
  id: number;
  name: string;
  link: string;
  preview: string;
  build_ref: string;
};

export type TAllSitesContainerProps = {};
export type TAllSitesViewProps = {
  cards?: UserSite[];
};

export type TCardProps = {
  card: UserSite;
};
