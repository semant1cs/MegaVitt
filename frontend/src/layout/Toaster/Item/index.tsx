import LayoutStore from "@store/LayoutStore";
import { FC, useEffect, useState } from "react";
import styles from "../../Layout.module.scss";

type ToasterItemProps = {
  id: number;
  text: string;
  index: number;
};

export const Item: FC<ToasterItemProps> = props => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    /** Время, через которое появится тостер */
    const timerStartTime = 150 * props.index;
    /** Время, через которое тостер пропадет */
    const timerEndTime = 4000 + 150 * props.index;

    const timerStart = setTimeout(() => setToggle(() => true), timerStartTime);

    const timerEnd = setTimeout(() => {
      setToggle(() => false);

      setTimeout(() => {
        LayoutStore.removeToaster(props.id);
      }, 300);
    }, timerEndTime);

    return () => {
      clearTimeout(timerStart);
      clearTimeout(timerEnd);
    };
  }, []);

  return (
    <div
      className={[
        styles.toaster__error,
        styles.toaster__container,
        toggle ? styles.toaster__active : styles.toaster__disabled,
      ].join(" ")}
    >
      <p className={styles.toaster__text}>{props.text}</p>
    </div>
  );
};
