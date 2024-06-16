import React, { memo, useCallback, useEffect, useState } from "react";
import { TFontsContainerProps } from "./Fonts.types";
import FontsView from "./Fonts.view";
import { layout } from "@store/LayoutStore";
import { observer } from "mobx-react-lite";
import UserFontsModal from "./UserFontsModal";
import authAxiosInstance from "@api/auth-api-instance";
import getErrorMessage from "@utils/getErrorMessage";
import type { TUserFonts } from "../CreateSite.types";
import SaveFontModal from "./SaveFontModal";

const FontsContainer: React.FC<TFontsContainerProps> = observer(props => {
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
  const handleSetFont = useCallback((value: string) => {
    setForm(prev => ({ ...prev, font: value }));
  }, []);

  /** Получение списка шрифтов пользователя */
  async function handleUserFonts() {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get("preset-fonts");

      layout.showModal(
        <UserFontsModal
          userFonts={responseData}
          handleSetFont={handleSetFont}
        />,
      );
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  /** Сохраненение шрифта пользователя */
  async function handleSaveFonts() {
    layout.showModal(<SaveFontModal font={form.font || "Open Sans"} />);
  }

  /** Нажатие на предыдущий шаг */
  function handlePrevStep() {
    props.handleChangeStep("Initialization");
  }

  /** Нажатие на следующий шаг */
  function handleNextStep() {
    props.handleSaveForm(form);
    props.handleChangeStep("Colors");
  }

  return (
    <FontsView
      {...props}
      form={form}
      handleSetFont={handleSetFont}
      handlePrevStep={handlePrevStep}
      handleNextStep={handleNextStep}
      handleUserFonts={handleUserFonts}
      handleSaveFonts={handleSaveFonts}
    />
  );
});

export { FontsContainer };
