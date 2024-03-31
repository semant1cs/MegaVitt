import type { TAuthenticationContainerProps, TAuthenticationForm, TCurrentPage } from "./Authentication.types";
import AuthenticationView from "./Authentication.view";
import { FC, Suspense, lazy, useCallback, useMemo, useState } from "react";

const SignIn = lazy(() => import("@components/Authentication/SignIn"));
const SignUp = lazy(() => import("@components/Authentication/SignUp"));

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

  /** Пропсы для дочерних страниц по умолчанию */
  const commonPageProps = {
    form,
    changeCurrentPage,
  };

  /** Функция для получения текущей страницы */
  const getCurrentPage = useMemo((): (() => React.ReactNode) => {
    switch (currentPage) {
      case "signIn":
        return () => (
          <Suspense fallback={false}>
            <SignIn {...commonPageProps} />
          </Suspense>
        );
      case "signUp":
        return () => (
          <Suspense fallback={false}>
            <SignUp {...commonPageProps} />
          </Suspense>
        );
      default:
        return () => (
          <Suspense fallback={false}>
            <SignIn {...commonPageProps} />
          </Suspense>
        );
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
