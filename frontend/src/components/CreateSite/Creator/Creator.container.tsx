import { FC, useEffect, useState } from "react";
import type { TCreatorContainerProps } from "./Creator.types";
import CreatorView from "./Creator.view";

/** Контейнерная компонента для отдачи вьюхи <CreatorView />*/
const CreatorContainer: FC<TCreatorContainerProps> = props => {
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

  /** Нажатие на предыдущий шаг */
  function handlePrevStep() {
    props.handleChangeStep("Colors");
  }

  /** Нажатие на сохранить */
  function handleNextStep() {
    props.handleSaveForm(form);
  }

  return (
    <CreatorView
      {...props}
      form={form}
      handlePrevStep={handlePrevStep}
      handleNextStep={handleNextStep}
    />
  );
};

export { CreatorContainer };
