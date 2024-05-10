import { FC } from "react";
import type { TCreatorViewProps } from "./Creator.types";
import layoutStyles from "@layout/Layout.module.scss";
import LayoutHeader from "@layout/Header";

import Button from "@ui/Button";
import { useNavigate } from "react-router-dom";
import Initialization from "./Initialization";
import Test from "./Test";

const CreatorView: FC<TCreatorViewProps> = props => {
  const navigate = useNavigate();

  return (
    <>
      <LayoutHeader>
        <ul className={layoutStyles.nav}>
          <li>
            <Button
              variant="text"
              className={layoutStyles.nav__item}
              onClick={() => navigate("/cabinet")}
            >
              Мои сайты
            </Button>
          </li>

          <li>
            <Button
              variant="text"
              className={layoutStyles.nav__item}
              onClick={() => {}}
            >
              <span>{123}</span>
              <span className={["user-icon", layoutStyles.nav__icon].join(" ")}></span>
            </Button>
          </li>
        </ul>
      </LayoutHeader>

      {/* <Initialization /> */}
      <Test />
    </>
  );
};

export default CreatorView;
