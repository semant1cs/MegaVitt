import type { TAuthenticationContainerProps, TAuthenticationForm, TCurrentPage } from "./Authentication.types";
import AuthenticationView from "./Authentication.view";
import { FC, useCallback, useMemo, useState } from "react";
import SignIn from "@components/Authentication/SignIn";
import SignUp from "@components/Authentication/SignUp";

const INITIAL_STATE: TAuthenticationForm = {
  username: "",
  email: "",
  password: "",
};

const AuthenticationContainer: FC<TAuthenticationContainerProps> = props => {
  const [form, setForm] = useState<TAuthenticationForm>(INITIAL_STATE);
  const [currentPage, setCurrentPage] = useState<TCurrentPage>("signIn");

  /** Колбек для изменения текущей страницы `currentPage` */
  const changeCurrentPage = useCallback((page: TCurrentPage) => setCurrentPage(() => page), []);

  /** Колбек для изменения формы авторизации `form` */
  const handleSaveForm = useCallback((newForm: TAuthenticationForm) => setForm(() => newForm), []);

  /** Пропсы для дочерних страниц по умолчанию */
  const commonPageProps = {
    form,
    handleSaveForm,
    changeCurrentPage,
  };

  /** Функция для получения текущей страницы */
  const getCurrentPage = useMemo((): (() => React.ReactNode) => {
    switch (currentPage) {
      case "signIn":
        return () => <SignIn {...commonPageProps} />;
      case "signUp":
        return () => <SignUp {...commonPageProps} />;
      default:
        return () => <SignIn {...commonPageProps} />;
    }
  }, [currentPage]);

  return (
    <AuthenticationView
      {...props}
      getCurrentPage={getCurrentPage}
    />
  );
};

export default AuthenticationContainer;
