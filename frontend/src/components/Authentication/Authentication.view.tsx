import { FC } from "react";
import type { TAuthenticationViewProps } from "./Authentication.types";
import LayoutHeader from "@layout/Header";
import LayoutBody from "@layout/Body";

const AuthenticationView: FC<TAuthenticationViewProps> = props => {
  return (
    <>
      <LayoutHeader></LayoutHeader>
      <LayoutBody>{props.getCurrentPage()}</LayoutBody>
    </>
  );
};

export default AuthenticationView;
