import { FC, PropsWithChildren } from "react";
import LayoutModal from "@layout/Modal";
import LayoutLoader from "@layout/Loader";
import type { TLayoutProps } from "@layout/Layout.types";

const Layout: FC<PropsWithChildren<TLayoutProps>> = props => {
  return (
    <div>
      {props.children}
      <LayoutModal />
      <LayoutLoader />
    </div>
  );
};

export default Layout;
