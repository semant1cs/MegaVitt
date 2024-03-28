import { TAuthenticationForm } from "@components/Authentication/Authentication.types";
import AuthService from "@services/AuthService";
import { makeAutoObservable } from "mobx";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  async signUp(form: TAuthenticationForm) {
    return await AuthService.signUp(form).then(data => {
      console.log(data);
    });
  }

  async signIn(form: TAuthenticationForm) {
    return await AuthService.signIn(form).then(data => {
      console.log(data);
    });
  }
}

export default new AuthStore();
