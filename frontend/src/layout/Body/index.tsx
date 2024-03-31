import { FC, PropsWithChildren } from "react";
import type { TLayoutBodyProps } from "@layout/Layout.types";
import styles from "../Layout.module.scss";

const LayoutBody: FC<PropsWithChildren<TLayoutBodyProps>> = ({ className, ...props }) => {
  return <main className={[styles.body, className].join(" ")}>{props.children}</main>;
};

export default LayoutBody;
