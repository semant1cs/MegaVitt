import React, { memo, useCallback, useEffect, useState } from "react";
import { TColorsContainerProps } from "./Colors.types";
import ColorsView from "./Colors.view";
import { site } from "@store/SiteStore";

const ColorsContainer: React.FC<TColorsContainerProps> = memo(props => {
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

  /** Получение списка шрифтов пользователя */
  async function handleUserColors() {
    await site.getUserColors();
  }

  /** Сохраненение шрифта пользователя */
  async function handleSaveColors() {
    await site.saveColors({
      name: "Название цветов",
      mainColor: form.colors?.main || "#0060E6",
      backgroundColor: "#FFFFFF",
    });
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
