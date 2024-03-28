import type { TLayoutToasterProps } from "@layout/Layout.types";
import { FC } from "react";
import styles from "../Layout.module.scss";
import LayoutStore from "@store/LayoutStore";
import { observer } from "mobx-react-lite";

const LayoutToaster: FC<TLayoutToasterProps> = observer(props => {
  return LayoutStore.toasterMessage ? (
    <div
      className={styles.toaster}
      id="megavitt-toaster"
    >
      <div className={styles.toaster__body}>{LayoutStore.toasterMessage}</div>
    </div>
  ) : null;
});

export default LayoutToaster;
