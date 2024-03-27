import { FC } from "react";
import type { TTextField } from "./TextField.types";
import styles from "./TextField.module.scss";

const TextField: FC<TTextField> = props => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className={[styles.textField, props.className].join(" ")}
    />
  );
};

export default TextField;
