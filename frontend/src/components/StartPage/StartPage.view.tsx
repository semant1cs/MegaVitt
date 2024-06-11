import { FC } from "react";
import type { TStartPageViewProps } from "./StartPage.types";
import LayoutHeader from "@layout/Header";
import styles from "./StartPage.module.scss";
import Button from "@ui/Button";
import LayoutBody from "@layout/Body";
import { useNavigate } from "react-router-dom";

/** Вьюха для отображения начальной страницы `StartPage`*/
const StartPageView: FC<TStartPageViewProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <LayoutHeader />

      <LayoutBody classNames={{ body__container: styles.welcome }}>
        <div className={styles.text}>
          <h1 className={styles.text__title}>Конструктор сайта вашего мероприятия</h1>

          <Button
            size="lg"
            color="primary"
            variant="contained"
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
