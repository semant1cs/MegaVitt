import type { TAuthenticationContainerProps } from "./Authentication.types";
import AuthenticationView from "./Authentication.view";
import { FC } from "react";

const AuthenticationContainer: FC<TAuthenticationContainerProps> = props => {
  return (
    <AuthenticationView {...props} />
  );
};

export default AuthenticationContainer;
