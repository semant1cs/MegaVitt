import type { TLayoutToasterProps } from "@layout/Layout.types";
import { FC, useMemo } from "react";
import LayoutStore from "@store/LayoutStore";
import { observer } from "mobx-react-lite";
import { Item } from "./Item";
import styles from "../Layout.module.scss";

const LayoutToaster: FC<TLayoutToasterProps> = observer(props => {
  const messages = useMemo(() => LayoutStore.toasterMessages, [LayoutStore.toasterMessages]);

  return (
    <div className={styles.toaster}>
      {messages.map((msg, index) => (
        <Item
          id={msg.id}
          key={msg.id}
          index={index}
          text={msg.text}
        />
      ))}
    </div>
  );
});

export default LayoutToaster;
