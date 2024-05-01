import { FC } from "react";
import type { TTemplateViewProps } from "../Creator.types";
import styles from "./Template.module.scss";
import Button from "@ui/Button";

const TemplateView: FC<TTemplateViewProps> = props => {
  return (
    <article className={styles.template}>
      <span className={["plus-icon", styles.template__add].join(" ")}></span>

      <div className={styles.text}>
        <h4 className={styles.text__title}>Пустая страница</h4>
        <p className={styles.text__link}>Начать с&nbsp;чистого листа</p>
      </div>

      <div className={styles.buttons}>
        <Button
          variant="contained-secondary"
          className={styles.buttons__select}
          onClick={() => {}}
        >
          Выбрать
        </Button>

        <Button
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
