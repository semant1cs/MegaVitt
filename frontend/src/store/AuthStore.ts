import AuthApi from "@api/auth-api";
import { TAuthenticationForm } from "@components/Authentication/Authentication.types";
import { makeAutoObservable } from "mobx";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  async signUp(form: TAuthenticationForm) {
    return await AuthApi.signUp(form).then(data => {
      console.log(data);
    });
  }

  async signIn(form: TAuthenticationForm) {
    return await AuthApi.signIn(form).then(data => {
      console.log(data);
    });
  }
}

export default new AuthStore();
