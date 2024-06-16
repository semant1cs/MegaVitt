import React, { FC, ReactElement } from "react";
import type { TTextField } from "./TextField.types";
import styles from "./TextField.module.scss";

const TextFieldColor: FC<TTextField> = props => {
  return (
    <div className={styles.textField__wrapper}>
      <label
        htmlFor={props.id}
        className={styles.textField__wrapper__text}
      >
        {props.value}
      </label>
      <TextFieldDefault {...props} />
    </div>
  );
};

const TextFieldDefault: FC<TTextField> = props => {
  return (
    <input
      {...props}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className={[styles.textField, props.variant === "light" ? styles.light : styles.dark, props.className].join(" ")}
    />
  );
};

const TextField: FC<TTextField> = props => {
  function getCorrectInput(type?: string): ReactElement {
    switch (type) {
      case "color":
        return <TextFieldColor {...props} />;
      default:
        return <TextFieldDefault {...props} />;
    }
  }
  return getCorrectInput(props?.type);
};

export default TextField;
