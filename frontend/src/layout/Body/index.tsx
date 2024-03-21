import { FC, PropsWithChildren } from "react";
import type { TLayoutBodyProps } from "@layout/Layout.types";

const LayoutBody: FC<PropsWithChildren<TLayoutBodyProps>> = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default LayoutBody;
