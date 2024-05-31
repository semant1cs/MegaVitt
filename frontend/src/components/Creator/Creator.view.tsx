import { FC } from "react";
import type { TCreatorViewProps } from "./Creator.types";
import LayoutHeader from "@layout/Header";

import Button from "@ui/Button";
import Initialization from "./Initialization";
import Test from "./Test";

const CreatorView: FC<TCreatorViewProps> = props => {
  return (
    <>
      <LayoutHeader />

      {/* <Initialization /> */}
      <Test />
    </>
  );
};

export default CreatorView;
