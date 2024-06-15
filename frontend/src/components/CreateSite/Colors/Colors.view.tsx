import React from "react";
import createStyles from "../CreateSite.module.scss";
import styles from "./Colors.module.scss";
import { TColorsViewProps } from "./Colors.types";
import LayoutBody from "@layout/Body";
import Button from "@ui/Button";
import Preview from "../Preview";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import { COLOR_NAME_BY_LABEL } from "../CreateSite.config";
import { TSiteFormRequired } from "../CreateSite.types";
import TextField from "@ui/TextField";

const ColorsView: React.FC<TColorsViewProps> = ({
  form,
  handleNextStep,
  handlePrevStep,
  handleSetColor,
  handleUserColors,
  handleSaveColors,
  handleChangeStep,
  ...props
}) => {
  return (
    <LayoutBody
      variant="light"
      classNames={{ body__container: createStyles.container }}
    >
      <h2 className={createStyles.title}>Создание сайта&nbsp;&mdash; шаг&nbsp;3</h2>

      <div className={styles.content}>
        <div className={styles.content__colors}>
          <h3 className={createStyles.subtitle}>Установите цвета по умолчанию</h3>

          <div className={styles.inputs}>
            {form.colors &&
              Object.entries(form.colors).map(([key, value]) => (
                <TextFieldContainer key={key}>
                  <TextFieldLabel>{COLOR_NAME_BY_LABEL[key as keyof TSiteFormRequired["colors"]]}</TextFieldLabel>

                  <TextFieldInner>
                    <TextField
                      id={key}
                      name={key}
                      type="color"
                      value={value}
                      onChange={e => handleSetColor(e.target.value, key)}
                    />
                  </TextFieldInner>
                </TextFieldContainer>
              ))}
          </div>

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

        <Preview initialForm={form} />
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
