import { ReactNode } from "react";

export type TCurrentPage = "signIn" | "signUp";

export type TAuthenticationContainerProps = {};

export type TAuthenticationViewProps = TAuthenticationContainerProps & {
  changeCurrentPage: (page: TCurrentPage) => ReactNode;
};

export type TCommonPageProps = {
  changeCurrentPage: (page: TCurrentPage) => ReactNode;
};

export type TSignUpProps = TCommonPageProps & {};

export type TSignInProps = TCommonPageProps & {};
