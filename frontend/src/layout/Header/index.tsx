import { FC, PropsWithChildren } from "react";
import type { TLayoutHeaderProps } from "@layout/Layout.types";
import styles from "../Layout.module.scss";
import Button from "@ui/Button";
import Popup from "@ui/Popup";
import { auth } from "@store/AuthStore";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";

const LayoutHeader: FC<PropsWithChildren<TLayoutHeaderProps>> = observer(({ className, ...props }) => {
  const isAuth = !!sessionStorage.getItem("userToken");
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogOut() {
    try {
      auth.logOut();
      navigate("/");
    } catch (e) {}
  }

  return (
    <header className={[styles.header, className].join(" ")}>
      <h1
        className={styles.header__logo}
        onClick={() => navigate("/")}
      >
        VASKA
      </h1>

      <nav>
        {isAuth ? (
          <ul className={styles.nav}>
            {!location.pathname.includes("cabinet") ? (
              <li>
                <Button
                  variant="text"
                  className={styles.nav__item}
                  onClick={() => navigate("/cabinet")}
                >
                  Мои сайты
                </Button>
              </li>
            ) : null}
            <li>
              <Popup
                onClick={handleLogOut}
                className={styles.nav__item}
              >
                <span>{auth.initialUserState?.username}</span>
                <span className={["user-icon", styles.nav__icon].join(" ")}></span>
              </Popup>
            </li>
          </ul>
        ) : (
          <ul className={styles.nav}>
            <li>
              <Button
                variant="text"
                className={styles.nav__item}
                onClick={() => navigate("/auth")}
              >
                <span>Войти</span>
                <span className={["user-icon", styles.nav__icon].join(" ")}></span>
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
});

export default LayoutHeader;
