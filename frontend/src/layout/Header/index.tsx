import { FC, PropsWithChildren } from "react";
import type { TLayoutHeaderProps } from "@layout/Layout.types";
import styles from "../Layout.module.scss";
import { useNavigate } from "react-router-dom";

const LayoutHeader: FC<PropsWithChildren<TLayoutHeaderProps>> = ({ className, ...props }) => {
  const navigate = useNavigate();

  return (
    <header className={[styles.header, className].join(" ")}>
      <p
        className={styles.header__logo}
        onClick={() => navigate("/")}
      >
        VASKA
      </p>

      <nav>{props.children}</nav>
    </header>
  );
};

export default LayoutHeader;
