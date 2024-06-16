import React, { memo, useCallback, useEffect, useState } from "react";
import { TColorsContainerProps } from "./Colors.types";
import ColorsView from "./Colors.view";
import { observer } from "mobx-react-lite";
import authAxiosInstance from "@api/auth-api-instance";
import getErrorMessage from "@utils/getErrorMessage";
import type { TSiteFormRequired } from "../CreateSite.types";
import { layout } from "@store/LayoutStore";
import SaveColorsModal from "./SaveColorsModal";
import { DEFAULT_SITE_SETTINGS } from "../CreateSite.config";
import UserColorsModal from "./UserColorsModal";

const INITIAL_COLORS: TSiteFormRequired["colors"] = DEFAULT_SITE_SETTINGS["colors"];

const ColorsContainer: React.FC<TColorsContainerProps> = observer(props => {
  const setterForm = props.initialForm;

  const [form, setForm] = useState(setterForm);
  const [initialForm, setInitialForm] = useState(setterForm);

  /** Изменилась ли форма */
  const changedForm = JSON.stringify(form) !== JSON.stringify(initialForm);
  /** Можно ли сохранить форму */
  const canSaveForm = changedForm;

  /** Обновляем формы */
  useEffect(() => {
    setForm(setterForm);
    setInitialForm(setterForm);
  }, [setterForm]);

  /** Эффект для установки лисенера для установки окна о том, что пользователь покидает страницу */
  useEffect(() => {
    if (!changedForm) return;

    window.addEventListener("beforeunload", handleBeforeUnload, false);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload, false);
  }, [changedForm]);

  /** Хендлер для установки окна о том, что пользователь покидает страницу */
  function handleBeforeUnload(event: BeforeUnloadEvent) {
    const confirmationMessage = "Вы уверены, что хотите закрыть страницу? Внесенные изменения не сохранятся";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
  }

  /** Устанавливаем новое значение шрифта */
  const handleSetColor = useCallback((value: string, label: string) => {
    setForm(prev => ({ ...prev, colors: { ...prev.colors, [label]: value } }));
  }, []);

  /** Получение списка цветов пользователя */
  async function handleUserColors() {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get("preset-colors");

      layout.showModal(
        <UserColorsModal
          userColors={responseData}
          handleSetColor={handleSetColor}
        />,
      );
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  /** Сохраненение цветов пользователя */
  async function handleSaveColors() {
    layout.showModal(
      <SaveColorsModal
        main={form?.colors?.main || INITIAL_COLORS["main"]}
        mainContrast={form?.colors?.mainContrast || INITIAL_COLORS["mainContrast"]}
        text={form?.colors?.text || INITIAL_COLORS["text"]}
        backgroundSection={form?.colors?.backgroundSection || INITIAL_COLORS["backgroundSection"]}
        background={form?.colors?.background || INITIAL_COLORS["background"]}
        error={form?.colors?.error || INITIAL_COLORS["error"]}
        success={form?.colors?.success || INITIAL_COLORS["success"]}
        warning={form?.colors?.warning || INITIAL_COLORS["warning"]}
        header={form?.colors?.header || INITIAL_COLORS["header"]}
      />,
    );
  }

  /** Нажатие на предыдущий шаг */
  function handlePrevStep() {
    props.handleChangeStep("Fonts");
  }

  /** Нажатие на следующий шаг */
  function handleNextStep() {
    props.handleSaveForm(form);
    props.handleChangeStep("Creator");
  }
  ``;
  return (
    <ColorsView
      {...props}
      form={form}
      handleSetColor={handleSetColor}
      handlePrevStep={handlePrevStep}
      handleNextStep={handleNextStep}
      handleUserColors={handleUserColors}
      handleSaveColors={handleSaveColors}
    />
  );
});

export { ColorsContainer };
