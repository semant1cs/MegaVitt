import { FC, PropsWithChildren } from "react";
import type { TLayoutHeaderProps } from "@layout/Layout.types";

const LayoutHeader: FC<PropsWithChildren<TLayoutHeaderProps>> = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default LayoutHeader;
