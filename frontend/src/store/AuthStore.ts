import authAxiosInstance from "@api/auth-api-instance";
import { TAuthenticationForm } from "@components/Authentication/Authentication.types";
import { makeAutoObservable } from "mobx";
import LayoutStore from "./LayoutStore";
import getErrorMessage from "../utils/getErrorMessage";
import type { UserState } from "@components/StartPage/AllSites/AllSites.types";

const root = "auth";

const signInURL = `${root}/signIn`;
const signUpURL = `${root}/signUp`;
const getProfileURL = `${root}/profile`;

class AuthStore {
  initialUserState?: UserState;

  constructor() {
    makeAutoObservable(this);
  }

  /** Обновление стейта пользователя */
  updateInitialUserState(newState: Partial<UserState>) {
    this.initialUserState = { ...this.initialUserState, ...newState };
  }

  /** Регистрация */
  async signUp(form: TAuthenticationForm) {
    LayoutStore.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post(signUpURL, form);
      localStorage.setItem("userToken", responseData.access_token);
    } catch (error) {
      LayoutStore.setToaster(await getErrorMessage(error));
    } finally {
      LayoutStore.showLoader(false);
    }
  }

  /** Авторизация */
  async signIn(form: TAuthenticationForm) {
    LayoutStore.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post(signInURL, form);
      localStorage.setItem("userToken", responseData.access_token);
    } catch (error) {
      LayoutStore.setToaster(await getErrorMessage(error));
    } finally {
      LayoutStore.showLoader(false);
    }
  }

  /** Получение данных о пользователе */
  async getProfile() {
    LayoutStore.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get(getProfileURL);
      this.updateInitialUserState(responseData);
    } catch (error) {
      LayoutStore.setToaster(await getErrorMessage(error));
    } finally {
      LayoutStore.showLoader(false);
    }
  }
}

export default new AuthStore();
