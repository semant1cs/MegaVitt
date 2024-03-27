import { FC, PropsWithChildren } from "react";
import type { TTextFieldLabel } from "../TextField.types";
import styles from "../TextField.module.scss";

/** Блок для надписи над текстовым полем ввода */
const TextFieldLabel: FC<PropsWithChildren<TTextFieldLabel>> = ({ children, ...props }) => {
  return <div className={[styles.container, props.className].join(" ")}>{children}</div>;
};

export default TextFieldLabel;
