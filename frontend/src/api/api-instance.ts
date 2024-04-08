import axios from 'axios';

// const appHost = import.meta.env.VITE_APP_HOST;
// const appPort = import.meta.env.VITE_APP_PORT;

const appHost = "localhost";
const appPort = "3000";

const authAxiosInstance = axios.create({
   baseURL: `http://${appHost}:${appPort}/`,
   timeout: 1000,
   headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("userToken")}`
  }
 });

export default authAxiosInstance
