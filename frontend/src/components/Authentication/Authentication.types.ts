import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

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
