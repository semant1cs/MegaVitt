import axios, { InternalAxiosRequestConfig } from "axios";

const appHost = "localhost";
const appPort = "3000";

const baseURL = `http://${appHost}:${appPort}`;

/** Axios для авторизации */
const authAxiosInstance = axios.create({
  baseURL,
});

const authInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // config.headers["Authorization"] = `Bearer ${localStorage.getItem("userToken")}`;
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";
  return config;
};

authAxiosInstance.interceptors.request.use(authInterceptor);

export default authAxiosInstance;
