import { type FC, type PropsWithChildren } from "react";

import type { TSelectItemProps } from "../Select.types";

import styles from "../Select.module.scss";

const SelectItem: FC<PropsWithChildren<TSelectItemProps>> = ({ className, children, value, ...props }) => {
  return (
    <li
      className={[styles.item, className].join(" ")}
      {...props}
    >
      {children}
    </li>
  );
};

export default SelectItem;
