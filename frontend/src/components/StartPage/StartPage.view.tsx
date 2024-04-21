import { FC } from "react";
import type { TStartPageViewProps } from "./StartPage.types";
import LayoutHeader from "@layout/Header";
import styles from "./StartPage.module.scss";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import AllSites from "./AllSites";
import Button from "@ui/Button";

/** Вьюха для отображения начальной страницы `StartPage`*/
const StartPageView: FC<TStartPageViewProps> = props => {
  const navigate = useNavigate();

  const isAuth = !!localStorage.getItem("userToken");

  return (
    <>
      <LayoutHeader>
        <ul className={styles.nav}>
          {isAuth ? (
            <>
              <li>
                <Button
                  variant="text"
                  className={styles.nav__item}
                  onClick={() => {}}
                >
                  Мои сайты
                </Button>
              </li>

              <li>
                <Button
                  variant="text"
                  className={styles.nav__item}
                  onClick={() => {}}
                >
                  <span>Имя аккаунта</span>
                  <span className="user-icon"></span>
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Button
                variant="text"
                className={styles.nav__item}
                onClick={() => navigate("/auth")}
              >
                <span>Войти</span>
                <span className="user-icon"></span>
              </Button>
            </li>
          )}
        </ul>
      </LayoutHeader>

      {isAuth ? <AllSites /> : <Welcome navigate={navigate} />}
    </>
  );
};

export default StartPageView;
