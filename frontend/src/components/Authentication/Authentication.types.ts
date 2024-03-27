import { ReactNode } from "react";

export type TCurrentPage = "signIn" | "signUp";

export type TAuthenticationForm = {
  username?: string;
  email: string;
  password: string;
};

export type TCommonPageProps = {
  form: TAuthenticationForm;
  changeCurrentPage: (page: TCurrentPage) => void;
  handleSaveForm: (form: TAuthenticationForm) => void;
};

export type TAuthenticationContainerProps = {};

export type TAuthenticationViewProps = TAuthenticationContainerProps & {
  getCurrentPage: () => ReactNode;
};

export type TSignUpContainerProps = TCommonPageProps & {};
export type TSignUpViewProps = {
  form: TAuthenticationForm;
  handleSaveForm: () => void;
  setEmail: (email: string) => void;
  setUserName: (userName: string) => void;
  setPassword: (password: string) => void;
  changeCurrentPage: (page: TCurrentPage) => void;
};

export type TSignInProps = TCommonPageProps & {};
