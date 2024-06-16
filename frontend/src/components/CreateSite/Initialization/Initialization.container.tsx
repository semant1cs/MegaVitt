import { FC, useCallback, useEffect, useState } from "react";
import type { TInitializationContainerProps } from "./Initialization.types";
import InitilalizationView from "./Initilalization.view";
import { layout } from "@store/LayoutStore";
import { auth } from "@store/AuthStore";
import { observer } from "mobx-react-lite";

const InitializationContainer: FC<TInitializationContainerProps> = observer(props => {
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

  useEffect(() => {
    if (form.link && !auth.initialUserState?.username) return;

    const newLink =
      `user/${auth.initialUserState?.username}/` +
      Math.floor(Math.random() * Math.floor(Math.random() * Date.now())) +
      Date.now() +
      Math.floor(100000 + Math.random() * 900000);

    handleSetInput(newLink, "link");
  }, [auth.initialUserState]);

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
    if (form.name === "") {
      layout.setToaster(["Введите название сайта"]);
      return;
    }

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
});

export { InitializationContainer };
