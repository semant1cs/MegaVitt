import { FC, PropsWithChildren } from "react";
import LayoutModal from "@layout/Modal";
import LayoutLoader from "@layout/Loader";
import type { TLayoutProps } from "@layout/Layout.types";
import LayoutToaster from "./Toaster";
import LayoutStore from "@store/LayoutStore";

const Layout: FC<PropsWithChildren<TLayoutProps>> = props => {
  return (
    <div>
      {props.children}
      <LayoutModal />
      <LayoutLoader />
      <LayoutToaster />
    </div>
  );
};

export default Layout;
