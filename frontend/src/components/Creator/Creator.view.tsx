import { FC } from "react";
import type { TCreatorViewProps } from "./Creator.types";
import styles from "./Creator.module.scss";
import LayoutBody from "@layout/Body";

/** Вьюха для отображения страницы создания пользовательского сайта */
const CreatorView: FC<TCreatorViewProps> = () => {
  return (
    <LayoutBody>
      <div className={styles.creator}>
        <canvas></canvas>
      </div>
    </LayoutBody>
  );
};

export default CreatorView;
