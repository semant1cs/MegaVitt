import { FC, PropsWithChildren } from "react";
import type { TTextFieldInner } from "../TextField.types";
import React from "react";
import styles from "../TextField.module.scss";

/** Контейнер для текстового поля ввода */
const TextFieldInner: FC<PropsWithChildren<TTextFieldInner>> = ({ children, className, ...props }) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) return React.cloneElement(child, props);
    return child;
  });

  return <div className={[styles.container, className].join(" ")}>{childrenWithProps}</div>;
};

export default TextFieldInner;
