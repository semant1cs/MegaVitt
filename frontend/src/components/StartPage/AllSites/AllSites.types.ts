export type UserState = {
  id?: string;
  roles?: UserRole[];
  username?: string;
};

export type UserRole = {
  id: string;
  description: string;
  value: string;
};

export type TAllSitesContainerProps = {};
export type TAllSitesViewProps = {};
