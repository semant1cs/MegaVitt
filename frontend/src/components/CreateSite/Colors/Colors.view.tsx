import React from "react";
import createStyles from "../CreateSite.module.scss";
import styles from "./Colors.module.scss";
import { TColorsViewProps } from "./Colors.types";
import LayoutBody from "@layout/Body";
import Button from "@ui/Button";
import Preview from "../Preview";

const ColorsView: React.FC<TColorsViewProps> = ({ handleUserColors, handleSaveColors, handleChangeStep, ...props }) => {
  return (
    <LayoutBody
      variant="light"
      classNames={{ body__container: createStyles.container }}
    >
      <h2 className={createStyles.title}>Создание сайта&nbsp;&mdash; шаг&nbsp;3</h2>

      <div className={styles.content}>
        <div className={styles.content__colors}>
          <h3 className={createStyles.subtitle}>Установите цвета по умолчанию</h3>

          <div className={styles.inputs}></div>

          <div className={styles.buttons}>
            <Button
              size="md"
              color="white"
              variant="outlined"
              className={styles.buttons__fonts}
              onClick={handleUserColors}
            >
              Мои цвета
            </Button>

            <Button
              size="md"
              color="primary"
              variant="contained"
              className={styles.buttons__save}
              onClick={handleSaveColors}
            >
              Сохранить как шаблон
            </Button>
          </div>
        </div>

        <Preview initialForm={props.initialForm} />
      </div>

      <div className={createStyles.buttons}>
        <Button
          size="md"
          color="secondary"
          variant="contained"
          className={createStyles.buttons__button}
          onClick={() => handleChangeStep("Fonts")}
        >
          Назад
        </Button>

        <Button
          size="md"
          color="primary"
          variant="contained"
          className={createStyles.buttons__button}
          onClick={() => handleChangeStep("Creator")}
        >
          Следующий шаг
        </Button>
      </div>
    </LayoutBody>
  );
};

export default ColorsView;
