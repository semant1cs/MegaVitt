import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type TButtonProps = {
  variant?: "text" | "contained-primary" | "contained-secondary" | "contained-white" | "outlined";
  className?: string;
  onClick: () => void;
};

const Button: FC<PropsWithChildren<TButtonProps>> = ({ children, variant, ...props }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "text":
        return styles.text;
      case "contained-primary":
        return styles.contained__primary;
      case "contained-secondary":
        return styles.contained__secondary;
      case "contained-white":
        return styles.contained__white;
      case "outlined":
        return styles.outlined;
    }
  };

  return (
    <button
      className={[styles.button, getVariantStyle(), props.className].join(" ")}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
export default Button;
