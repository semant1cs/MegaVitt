import { FC, useState } from "react";
import type { TStartPageViewProps } from "./StartPage.types";
import LayoutHeader from "@layout/Header";
import styles from "./StartPage.module.scss";
import layoutStyles from "@layout/Layout.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "@ui/Button";
import LayoutBody from "@layout/Body";
import AuthStore from "@store/AuthStore";
import Popup from "@ui/Popup";

/** Вьюха для отображения начальной страницы `StartPage`*/
const StartPageView: FC<TStartPageViewProps> = ({ onHandleLogout }) => {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("userToken");
  const userName = AuthStore.initialUserState?.username;

  return (
    <>
      <LayoutHeader>
        {isAuth ? (
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
              <Popup
                onClick={onHandleLogout}
                className={layoutStyles.nav__item}
              >
                <span>{userName}</span>
                <span className={["user-icon", layoutStyles.nav__icon].join(" ")}></span>
              </Popup>
            </li>
          </ul>
        ) : (
          <ul className={layoutStyles.nav}>
            <li>
              <Button
                variant="text"
                className={layoutStyles.nav__item}
                onClick={() => navigate("/auth")}
              >
                <span>Войти</span>
                <span className={["user-icon", layoutStyles.nav__icon].join(" ")}></span>
              </Button>
            </li>
          </ul>
        )}
      </LayoutHeader>

      <LayoutBody classNames={{ body__container: styles.welcome }}>
        <div className={styles.text}>
          <h1 className={styles.text__title}>Конструктор сайта вашего мероприятия</h1>

          <Button
            variant="contained-primary"
            className={styles.text__button}
            onClick={() => navigate("/auth")}
          >
            Создать сайт
          </Button>
        </div>

        <div className={styles.image}></div>
      </LayoutBody>
    </>
  );
};

export default StartPageView;
