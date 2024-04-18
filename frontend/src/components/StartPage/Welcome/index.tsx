import { FC } from "react";
import styles from "./Welcome.module.scss";
import type { TWelcomeProps } from "../StartPage.types";
import Button from "@ui/Button";
import LayoutBody from "@layout/Body";

const Welcome: FC<TWelcomeProps> = ({ navigate }) => {
  return (
    <LayoutBody classNames={{body__container: styles.welcome}}>
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

      <div className={styles.image}>
      </div>
    </LayoutBody>
  );
};

export default Welcome;
