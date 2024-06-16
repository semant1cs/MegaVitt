import { FC, PropsWithChildren, useEffect } from "react";
import type {
  TLayoutModalProps,
  TModalContentProps,
  TModalFooterProps,
  TModalHeaderProps,
  TModalProps,
} from "@layout/Layout.types";
import { observer } from "mobx-react-lite";
import { layout } from "@store/LayoutStore";
import styles from "../Layout.module.scss";

export const Modal: FC<PropsWithChildren<TModalProps>> = observer(props => {
  function handleClose() {
    layout.hideModal();
  }

  return (
    <div
      onClick={handleClose}
      className={styles.modal}
    >
      <div
        className={[styles.modal__wrapper, props.className].join(" ")}
        onClick={e => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
});

export const ModalHeader: FC<PropsWithChildren<TModalHeaderProps>> = observer(props => {
  function handleClose() {
    layout.hideModal();
  }

  return (
    <div className={[styles.modal__header, props.className].join(" ")}>
      {props.children ? (
        props.children
      ) : (
        <span
          onClick={handleClose}
          className={[styles.modal__close, "close-icon"].join(" ")}
        ></span>
      )}
    </div>
  );
});

export const ModalContent: FC<PropsWithChildren<TModalContentProps>> = observer(props => {
  return <div className={[styles.modal__content, props.className].join(" ")}>{props.children}</div>;
});

export const ModalFooter: FC<PropsWithChildren<TModalFooterProps>> = observer(props => {
  return <div className={[styles.modal__footer, props.className].join(" ")}>{props.children}</div>;
});

const LayoutModal: FC<TLayoutModalProps> = observer(props => {
  useEffect(() => {
    document.body.style.overflowY = layout.modalContent ? "hidden" : "auto";
  }, [layout.modalContent]);

  return layout.modalContent;
});

export default LayoutModal;
