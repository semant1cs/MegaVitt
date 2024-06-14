import React from "react";
import { TFontsViewProps } from "./Fonts.types";
import LayoutBody from "@layout/Body";
import createStyles from "../CreateSite.module.scss";
import styles from "./Fonts.module.scss";
import Preview from "../Preview";
import Button from "@ui/Button";
import { Select, SelectItem } from "@ui/Select";
import { DEFAULT_FONTS } from "../CreateSite.config";
import { randomId } from "@utils/getRandomId";

const FontsView: React.FC<TFontsViewProps> = ({
  form,
  handleSetFont,
  handlePrevStep,
  handleNextStep,
  handleUserFonts,
  handleSaveFonts,
  handleChangeStep,
  ...props
}) => {
  return (
    <LayoutBody
      variant="light"
      classNames={{ body__container: createStyles.container }}
    >
      <h2 className={createStyles.title}>Создание сайта&nbsp;&mdash; шаг&nbsp;2</h2>

      <div className={styles.content}>
        <div className={styles.content__fonts}>
          <h3 className={createStyles.subtitle}>Выберите шрифт по умолчанию</h3>

          <p className={createStyles.description}>
            Шрифт вашего сайта применяется ко всем элементам в качестве семейства шрифтов по умолчанию
          </p>

          <div className={styles.buttons}>
            <Button
              size="md"
              color="white"
              variant="outlined"
              className={styles.buttons__fonts}
              onClick={handleUserFonts}
            >
              Мои шрифты
            </Button>

            <Button
              size="md"
              color="primary"
              variant="contained"
              className={styles.buttons__save}
              onClick={handleSaveFonts}
            >
              Сохранить как шаблон
            </Button>
          </div>

          <Select
            value={form.font}
            className={styles.fonts}
            onChange={handleSetFont}
            style={{ fontFamily: form.font }}
          >
            {DEFAULT_FONTS.map(f => (
              <SelectItem
                value={f.value}
                key={randomId()}
                style={{ fontFamily: f.value }}
              >
                {f.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <Preview initialForm={form} />
      </div>

      <div className={createStyles.buttons}>
        <Button
          size="md"
          color="secondary"
          variant="contained"
          className={createStyles.buttons__button}
          onClick={handlePrevStep}
        >
          Назад
        </Button>

        <Button
          size="md"
          color="primary"
          variant="contained"
          className={createStyles.buttons__button}
          onClick={handleNextStep}
        >
          Следующий шаг
        </Button>
      </div>
    </LayoutBody>
  );
};

export default FontsView;
