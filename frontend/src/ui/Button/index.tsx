import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type TButtonProps = {
  variant?: "icon" | "text" | "contained" | "outlined";
  size?: "lg" | "md" | "none";
  color?: "primary" | "white" | "secondary" | "none";
  className?: string;
  onClick: (e?: any) => void;
};

const Button: FC<PropsWithChildren<TButtonProps>> = ({
  children,
  variant = "contained",
  size = "none",
  color = "none",
  ...props
}) => {
  return (
    <button
      className={[styles.button, styles[variant], styles[size], styles[color], props.className].join(" ")}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
export default Button;
