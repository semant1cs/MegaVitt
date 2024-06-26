import { FC } from "react";
import type { TAllSitesViewProps } from "./AllSites.types";
import LayoutBody from "@layout/Body";
import Button from "@ui/Button";
import Card from "./Card";
import styles from "./AllSites.module.scss";
import LayoutHeader from "@layout/Header";
import { useNavigate } from "react-router-dom";

/** Вьюха для страницы "Мои сайты" */
const AllSitesView: FC<TAllSitesViewProps> = ({ cards, ...props }) => {
  const navigate = useNavigate();

  return (
    <>
      <LayoutHeader />

      <LayoutBody classNames={{ body__container: styles.allSites }}>
        <div className={styles.header}>
          <h2 className={styles.header__title}>Мои сайты</h2>

          <Button
            size="md"
            color="white"
            variant="contained"
            className={styles.header__button}
            onClick={() => navigate("/create")}
          >
            <span className={["plus-icon", styles.header__icon].join(" ")}></span>
            <span className={styles.header__text}>Создать новый сайт</span>
          </Button>
        </div>

        <section className={styles.sites}>
          {cards?.length ? (
            cards.map(card => (
              <Card
                card={card}
                key={card.id}
              />
            ))
          ) : (
            <p className={styles.sites__empty}>Для начала создайте сайт</p>
          )}
        </section>
      </LayoutBody>
    </>
  );
};

export default AllSitesView;
