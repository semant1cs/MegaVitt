import { FC } from "react";
import type { TTextFieldUnderline } from "../TextField.types";
import styles from "../TextField.module.scss";

/** Блок для линии под текстовым полем ввода */
const TextFieldUnderline: FC<TTextFieldUnderline> = ({ isError, variant, className }) => {
  return <div className={[styles.underline, variant === "light" ? styles.light : styles.dark, className].join(" ")}></div>;
};

export default TextFieldUnderline;
