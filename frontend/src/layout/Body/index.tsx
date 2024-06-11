import { FC, PropsWithChildren } from "react";
import type { TLayoutBodyProps } from "@layout/Layout.types";
import styles from "../Layout.module.scss";

const LayoutBody: FC<PropsWithChildren<TLayoutBodyProps>> = ({ classNames, variant = "dark", ...props }) => {
  return (
    <main className={[styles.body, styles[variant], classNames?.body].join(" ")}>
      <div className={[styles.body__container, classNames?.body__container].join(" ")}>{props.children}</div>
    </main>
  );
};

export default LayoutBody;
