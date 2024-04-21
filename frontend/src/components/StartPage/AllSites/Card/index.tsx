import { FC } from "react";
import type { TCardProps } from "../AllSites.types";
import styles from "./Card.module.scss";
import Button from "@ui/Button";

export const Card: FC<TCardProps> = ({ card }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img
          src={card.image_url}
          className={styles.image__link}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.text}>
          <h3 className={styles.text__title}>{card.title}</h3>
          <a className={styles.text__link}>{card.url_link}</a>
        </div>

        <Button onClick={() => {}}>
          <span className={"settings-icon"}></span>
        </Button>
      </div>
    </article>
  );
};
