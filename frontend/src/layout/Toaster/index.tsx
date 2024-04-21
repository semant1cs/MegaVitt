import type { TLayoutToasterProps } from "@layout/Layout.types";
import { FC, useMemo } from "react";
import LayoutStore from "@store/LayoutStore";
import { observer } from "mobx-react-lite";
import { Item } from "./Item";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "../Layout.module.scss";

const LayoutToaster: FC<TLayoutToasterProps> = observer(props => {
  const messages = useMemo(() => LayoutStore.toasterMessages, [LayoutStore.toasterMessages]);

  return (
    <TransitionGroup
      component={"div"}
      className={styles.toaster}
    >
      {messages.map(msg => (
        <CSSTransition
          key={msg.id}
          timeout={300}
          classNames={{
            appear: styles.toaster__appear,
            appearActive: styles.toaster__activeAppear,
            appearDone: styles.toaster__doneAppear,
            enter: styles.toaster__enter,
            enterActive: styles.toaster__activeEnter,
            enterDone: styles.toaster__doneEnter,
            exit: styles.toaster__exit,
            exitActive: styles.toaster__activeExit,
            exitDone: styles.toaster__doneExit,
          }}
        >
          <Item
            id={msg.id}
            text={msg.text}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});

export default LayoutToaster;
