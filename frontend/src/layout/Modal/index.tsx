import { FC, PropsWithChildren, useEffect } from "react";
import type { TLayoutModalProps, TModalContentProps, TModalFooterProps, TModalHeaderProps } from "@layout/Layout.types";
import { observer } from "mobx-react-lite";
import { layout } from "@store/LayoutStore";
import styles from "../Layout.module.scss";

export const ModalHeader: FC<PropsWithChildren<TModalHeaderProps>> = observer(props => {
  function handleClose() {
    layout.hideModal();
  }

  return (
    <div className={styles.modal__header}>
      <span
        onClick={handleClose}
        className={[styles.modal__close, "close-icon"].join(" ")}
      ></span>
    </div>
  );
});

export const ModalContent: FC<PropsWithChildren<TModalContentProps>> = observer(props => {
  return <div className={styles.modal__content}></div>;
});

export const ModalFooter: FC<PropsWithChildren<TModalFooterProps>> = observer(props => {
  return <div className={styles.modal__footer}></div>;
});

const LayoutModal: FC<PropsWithChildren<TLayoutModalProps>> = observer(props => {
  useEffect(() => {
    document.body.style.overflowY = layout.modalContent ? "hidden" : "auto";
  }, [layout.modalContent]);

  return layout.modalContent ? (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>{layout.modalContent}</div>
    </div>
  ) : null;
});

export default LayoutModal;
