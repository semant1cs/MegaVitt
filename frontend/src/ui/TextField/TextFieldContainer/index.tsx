import { FC, PropsWithChildren } from "react";
import type { TTextFieldContainer } from "../TextField.types";
import React from "react";
import styles from "../TextField.module.scss";

/** Контейнер для элементов текстового поля ввода `Label` `HintText` `Inner`*/
const TextFieldContainer: FC<PropsWithChildren<TTextFieldContainer>> = ({ children, className, ...props }) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) return React.cloneElement(child, props);
    return child;
  });

  return <div className={[styles.container, className].join(" ")}>{childrenWithProps}</div>;
};

export default TextFieldContainer;
