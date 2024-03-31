import { FC } from "react";
import type { TStartPageViewProps } from "./StartPage.types";
import LayoutHeader from "@layout/Header";
import LayoutBody from "@layout/Body";
import styles from "./StartPage.module.scss";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import AllSites from "./AllSites";

/** Вьюха для отображения начальной страницы `StartPage`*/
const StartPageView: FC<TStartPageViewProps> = props => {
  const navigate = useNavigate();

  //   const isAuth = localStorage.getItem("userToken");
  const isAuth = false;

  return (
    <>
      <LayoutHeader>
        <ul className={styles.nav}>
          {isAuth ? (
            <>
              <li className={styles.nav__item}>
                <span>Мои сайты</span>
              </li>
              <li className={styles.nav__item}>
                <span>Имя аккаунта</span>
                <span className="user-icon"></span>
              </li>
            </>
          ) : (
            <li
              className={styles.nav__item}
              onClick={() => navigate("/auth")}
            >
              <span>Войти</span>
              <span className="user-icon"></span>
            </li>
          )}
        </ul>
      </LayoutHeader>

      {isAuth ? <AllSites /> : <Welcome navigate={navigate} />}
    </>
  );
};

export default StartPageView;
