import { FC } from "react";
import type { TAuthenticationViewProps } from "./Authentication.types";
import LayoutBody from "@layout/Body";
import styles from "./Authentication.module.scss";

const AuthenticationView: FC<TAuthenticationViewProps> = props => {
  return (
    <>
      <LayoutBody classNames={{ body: styles.auth, body__container: styles.auth__container }}>
        {props.getCurrentPage()}
      </LayoutBody>
    </>
  );
};

export default AuthenticationView;
