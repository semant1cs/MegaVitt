import { ReactNode } from "react";
// в UserLoginRequest описывается объект, который должен приходить для запроса на логин
// в UserLoginResponse описывается то, что приходит в ответе на запрос

export type TCurrentPage = "signIn" | "signUp";

export type TAuthenticationForm = {
  username?: string;
  email: string;
  password: string;
};

export type TCommonPageProps = {
  form: TAuthenticationForm;
  changeCurrentPage: (page: TCurrentPage) => void;
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
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  changeCurrentPage: (page: TCurrentPage) => void;
};

export type TSignInContainerProps = TCommonPageProps & {};
export type TSignInViewProps = {
  form: TAuthenticationForm;
  handleSaveForm: () => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  changeCurrentPage: (page: TCurrentPage) => void;
};
