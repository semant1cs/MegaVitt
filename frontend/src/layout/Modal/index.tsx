import { FC, PropsWithChildren } from "react";
import type { TLayoutModalProps, TModalContentProps, TModalFooterProps, TModalHeaderProps } from "@layout/Layout.types";
import { observer } from "mobx-react-lite";

export const ModalHeader: FC<PropsWithChildren<TModalHeaderProps>> = props => {
  return <div></div>;
};

export const ModalContent: FC<PropsWithChildren<TModalContentProps>> = props => {
  return <div></div>;
};

export const ModalFooter: FC<PropsWithChildren<TModalFooterProps>> = props => {
  return <div></div>;
};

const LayoutModal: FC<PropsWithChildren<TLayoutModalProps>> = observer(props => {
  return <div>{props.children}</div>;
});

export default LayoutModal;
