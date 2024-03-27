import { FC, useCallback, useEffect, useState } from "react";
import type { TAuthenticationForm, TSignUpContainerProps } from "../Authentication.types";
import SignUpView from "./SignUp.view";

/** Контейнерная компонента для отдачи вьюхи <SignUpView /> */
const SignUpContainer: FC<TSignUpContainerProps> = props => {
  const [setterForm, setSetterForm] = useState<TAuthenticationForm>(props.form);

  const [initialState, setInitialState] = useState<TAuthenticationForm>(setterForm);
  const [form, setForm] = useState<TAuthenticationForm>(setterForm);
  /** Изменилась ли форма */
  const changedForm = JSON.stringify(form) !== JSON.stringify(initialState);
  /** Можно ли сохранить форму */
  const canSaveForm = changedForm;

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

  /** Колбек для изменения никнейма пользователя `userName` */
  const setUserName = useCallback((userName: string) => {
    setForm(prev => ({ ...prev, userName }));
  }, []);

  /** Колбек для изменения почты пользователя `email` */
  const setEmail = useCallback((email: string) => {
    setForm(prev => ({ ...prev, email }));
  }, []);

  /** Колбек для изменения пароля пользователя `password` */
  const setPassword = useCallback((password: string) => {
    setForm(prev => ({ ...prev, password }));
  }, []);

  /** Хендлер для сохранения формы */
  function handleSaveForm() {
    props.handleSaveForm(form);
  }

  return (
    <SignUpView
      form={form}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSaveForm={handleSaveForm}
      changeCurrentPage={props.changeCurrentPage}
    />
  );
};

export { SignUpContainer };
