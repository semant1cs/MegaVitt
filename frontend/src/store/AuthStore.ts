import authAxiosInstance from "@api/auth-api-instance";
import { TAuthenticationForm } from "@components/Authentication/Authentication.types";
import { makeAutoObservable } from "mobx";
import getErrorMessage from "../utils/getErrorMessage";
import type { UserState } from "@components/AllSites/AllSites.types";
import { layout } from "./LayoutStore";

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
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post(signUpURL, form);
      sessionStorage.setItem("userToken", responseData.access_token);
      await this.signIn(form);
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  /** Авторизация */
  async signIn(form: TAuthenticationForm) {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post(signInURL, form);
      sessionStorage.setItem("userToken", responseData.access_token);
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  async logOut() {
    layout.showLoader(true);

    try {
      // const {data: responseData} = await authAxiosInstance.post(logOutURL);
      sessionStorage.removeItem("userToken");
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  /** Получение данных о пользователе */
  async getProfile() {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get(getProfileURL);

      /** Моковые данные. Потом убрать */
      const sites: UserState["sites"] = [
        {
          id: 123,
          title: "Название сайта",
          image_url: "",
          url_link: "https://localhost/123",
        },
        {
          id: 234,
          title: "Название сайта",
          image_url: "",
          url_link: "https://localhost/123",
        },
        {
          id: 2344,
          title: "Название сайта",
          image_url: "",
          url_link: "https://localhost/123",
        },
      ];
      this.updateInitialUserState({ ...responseData, sites: sites });
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
    } finally {
      layout.showLoader(false);
    }
  }
}

export default new AuthStore();
export const auth = new AuthStore();
