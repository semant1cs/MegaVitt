import { FC } from "react";
import type { TTemplateViewProps } from "../Initialization.types";
import styles from "./Template.module.scss";
import Button from "@ui/Button";

const TemplateView: FC<TTemplateViewProps> = props => {
  return (
    <article className={styles.template}>
      <div className={styles.header}>
        <span className={["thin-plus-icon", styles.header__add].join(" ")}></span>
      </div>

      <div className={styles.text}>
        <h4 className={styles.text__title}>Пустая страница</h4>
        <p className={styles.text__description}>Начать с&nbsp;чистого листа</p>
      </div>

      <div className={styles.buttons}>
        <Button
          size="md"
          color="secondary"
          variant="contained"
          className={styles.buttons__select}
          onClick={() => {}}
        >
          Выбрать
        </Button>

        <Button
          size="md"
          color="white"
          variant="outlined"
          className={styles.buttons__look}
          onClick={() => {}}
        >
          Посмотреть
        </Button>
      </div>
    </article>
  );
};

export default TemplateView;
