import authAxiosInstance from "@api/auth-api-instance";
import { TAuthenticationForm } from "@components/Authentication/Authentication.types";
import { makeAutoObservable } from "mobx";
import LayoutStore from "./LayoutStore";
import getErrorMessage from "../utils/getErrorMessage";

const root = "auth";

const signInURL = `${root}/signIn`;
const signUpURL = `${root}/signUp`;

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  async signUp(form: TAuthenticationForm) {
    LayoutStore.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post(signUpURL, form);
      localStorage.setItem("userToken", responseData.access_token);

      console.log(responseData);
    } catch (error) {
      LayoutStore.setToaster(await getErrorMessage(error));
    } finally {
      LayoutStore.showLoader(false);
    }
  }

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
}

export default new AuthStore();
