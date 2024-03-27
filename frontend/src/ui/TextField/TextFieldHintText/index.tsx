import { FC, PropsWithChildren } from "react";
import type { TTextFieldHintText } from "../TextField.types";
import styles from "../TextField.module.scss";

/** Блок для надписи под текстовым полем ввода */
const TextFieldHintText: FC<PropsWithChildren<TTextFieldHintText>> = ({ children, ...props }) => {
  return <p className={[styles.hint, props.className].join(" ")}>{children}</p>;
};

export default TextFieldHintText;
