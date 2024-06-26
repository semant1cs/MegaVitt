import { FC } from "react";
import type { TCardProps } from "../AllSites.types";
import styles from "./Card.module.scss";
import Button from "@ui/Button";

const Card: FC<TCardProps> = ({ card }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img
          src={
            card.preview ||
            "https://img.freepik.com/free-photo/high-angle-desk-with-device_23-2149013880.jpg?t=st=1714559314~exp=1714562914~hmac=57c6e0129042762393e2b5a53334264f0e23a2f4961bc028a3a3f81af846dd41&w=996"
          }
          alt="Изображение сайта"
          className={styles.image__link}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.text}>
          <h3 className={styles.text__title}>{card.name}</h3>
          <a
            target="_blank"
            className={styles.text__link}
            href={`http://localhost:3000/${card.build_ref}`}
          >
            Ссылка на сайт
          </a>
        </div>

        <Button
          variant="icon"
          onClick={() => {}}
        >
          <span className={["settings-icon", styles.icon].join(" ")}></span>
        </Button>
      </div>
    </article>
  );
};

export default Card;
