import type { TAuthenticationForm } from "@components/Authentication/Authentication.types";
import LayoutStore from "@store/LayoutStore";
import axios from "axios";
import { observable } from "mobx";

const backAPIURL = import.meta.env.VITE_BASE_URL_AUTH;

class AuthService {
  async signUp(form: TAuthenticationForm) {
    try {
      const response = await axios.post(
        `${backAPIURL}/signIn`,
        {
          username: form.username,
          email: form.email,
          password: form.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("userToken", response.data.access_token);
      }

      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        LayoutStore.showToaster(e.message);
      }
    }
  }

  async signIn(form: TAuthenticationForm) {
    return await axios
      .post(
        `${backAPIURL}/login`,
        {
          email: form.email,
          password: form.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("userToken", response.data.access_token);
        }

        return response.data;
      });
  }
}

export default new AuthService();
