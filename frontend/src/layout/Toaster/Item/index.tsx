import LayoutStore from "@store/LayoutStore";
import { FC, useEffect, useState } from "react";
import styles from "../../Layout.module.scss";

type ToasterItemProps = {
  id: number;
  text: string;
};

export const Item: FC<ToasterItemProps> = props => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToggle(() => false);

      setTimeout(() => {
        LayoutStore.removeToaster(props.id);
      }, 750);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={[styles.toaster__error, styles.toaster__container, toggle ? styles.toaster__active : null].join(" ")}
    >
      <p className={styles.toaster__text}>{props.text}</p>
    </div>
  );
};
