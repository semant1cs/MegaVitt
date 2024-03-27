import type { TAuthenticationContainerProps, TCurrentPage } from "./Authentication.types";
import AuthenticationView from "./Authentication.view";
import { FC } from "react";
import SignIn from "@components/Authentication/SignIn";
import SignUp from "@components/Authentication/SignUp";

const AuthenticationContainer: FC<TAuthenticationContainerProps> = props => {
  const changeCurrentPage = (page: TCurrentPage) => {
    switch (page) {
      case "signIn":
        return <SignIn />;
      case "signUp":
        return <SignUp />;
    }
  };

  return (
    <AuthenticationView
      changeCurrentPage={changeCurrentPage}
      {...props}
    />
  );
};

export default AuthenticationContainer;
