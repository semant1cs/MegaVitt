import { FC } from "react";
import type { TAllSitesViewProps } from "./AllSites.types";
import LayoutBody from "@layout/Body";
import Button from "@ui/Button";
import Card from "./Card";
import styles from "./AllSites.module.scss";
import LayoutHeader from "@layout/Header";
import layoutStyles from "@layout/Layout.module.scss";

/** Вьюха для страницы "Мои сайты" */
const AllSitesView: FC<TAllSitesViewProps> = ({ cards, userName, navigate }) => {
  return (
    <>
      <LayoutHeader>
        <ul className={layoutStyles.nav}>
          <li>
            <Button
              variant="text"
              className={layoutStyles.nav__item}
              onClick={() => {}}
            >
              <span>{userName}</span>
              <span className={["user-icon", layoutStyles.nav__icon].join(" ")}></span>
            </Button>
          </li>
        </ul>
      </LayoutHeader>

      <LayoutBody classNames={{ body__container: styles.allSites }}>
        <div className={styles.header}>
          <h2 className={styles.header__title}>Мои сайты</h2>

          <Button
            variant="contained-white"
            className={styles.header__button}
            onClick={() => navigate("/creator")}
          >
            <span className={["plus-icon", styles.header__icon].join(" ")}></span>
            <span className={styles.header__text}>Создать новый сайт</span>
          </Button>
        </div>

        <section className={styles.sites}>
          {cards
            ? cards.map(card => (
                <Card
                  card={card}
                  key={card.id}
                />
              ))
            : null}
        </section>
      </LayoutBody>
    </>
  );
};

export default AllSitesView;
