import { FC, PropsWithChildren } from "react";
import type { TLayoutModalProps } from "@layout/Layout.types";

const LayoutModal: FC<PropsWithChildren<TLayoutModalProps>> = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default LayoutModal;
