import { FC, useCallback, useEffect, useState } from "react";
import type { TInitializationContainerProps } from "./Initialization.types";
import InitilalizationView from "./Initilalization.view";

const InitializationContainer: FC<TInitializationContainerProps> = props => {
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

  /** Устанавливаем новое значение инпута */
  const handleSetInput = useCallback((value: string, label: string) => {
    setForm(prev => ({ ...prev, [label]: value }));
  }, []);

  /** Нажатие на следующий шаг */
  function handleNextStep() {
    props.handleSaveForm(form);
    props.handleChangeStep("Fonts");
  }

  return (
    <InitilalizationView
      {...props}
      form={form}
      handleSetInput={handleSetInput}
      handleNextStep={handleNextStep}
    />
  );
};

export { InitializationContainer };
