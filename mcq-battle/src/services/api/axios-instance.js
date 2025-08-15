import axios from "axios";
import { GetAccessToken } from '../cookie/authToken.cookie.js';
const BASE_URL = import.meta.env.VITE_BASE_API_URL;


const axiosInstance = axios.create();


axiosInstance.interceptors.request.use(
  (config) => {
    config.url = BASE_URL + config.url;

    const token = GetAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
   
    return Promise.reject(error);
  }
);

export default axiosInstance;
