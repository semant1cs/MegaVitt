import { FC, PropsWithChildren } from "react";
import type { TTextFieldLabel } from "../TextField.types";
import styles from "../TextField.module.scss";

/** Блок для надписи над текстовым полем ввода */
const TextFieldLabel: FC<PropsWithChildren<TTextFieldLabel>> = ({ children, variant, ...props }) => {
  return <div className={[styles.label, variant === "light" ? styles.light : styles.dark, props.className].join(" ")}>{children}</div>;
};

export default TextFieldLabel;
