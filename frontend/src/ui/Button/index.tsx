import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type TButtonProps = {
  className?: string;
  onClick: () => void;
};

const Button: FC<PropsWithChildren<TButtonProps>> = ({ children, ...props }) => {
  return (
    <button
      className={[styles.button, props.className].join(" ")}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
export default Button;
