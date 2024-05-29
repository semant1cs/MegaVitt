import axios, { InternalAxiosRequestConfig } from "axios";

const appHost = "localhost";
const appPort = "3002";

const baseURL = `http://${appHost}:${appPort}`;

/** Axios для авторизации */
const authAxiosInstance = axios.create({
  baseURL,
});

const authInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers["Authorization"] = `${localStorage.getItem("userToken")}`;
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";
  config.withCredentials = true;
  return config;
};

authAxiosInstance.interceptors.request.use(authInterceptor);

/** Отлавливаем ошибку с окончанием токена и обновляем его */
authAxiosInstance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    if (
      (error.response && error.response?.status === 401 && error.response?.statusText === "Unauthorized") ||
      !localStorage.getItem("userToken")
    ) {
      try {
        try {
          // const { data: responseData } = await authAxiosInstance.get("/auth/refresh");
          // localStorage.setItem("userToken", responseData.access_token);
          localStorage.setItem("userToken", "");
          window.location.replace("http://localhost:5173/auth");
        } catch (e) {
        } finally {
          // return authAxiosInstance.request(originalRequest);
        }
      } catch (e) {}
    }

    throw error;
  },
);

export default authAxiosInstance;
