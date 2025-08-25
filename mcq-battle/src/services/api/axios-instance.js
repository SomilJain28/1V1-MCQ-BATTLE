import axios from "axios";
import  {GetAccessToken}  from '../cookie/authToken.cookie.js';
const BASE_URL = import.meta.env.VITE_BASE_API_URL;


const axiosInstance = axios.create();


axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Interceptor is running for request:", config.url); 
    config.url = BASE_URL + config.url;

    const token = GetAccessToken();
    console.log("Token found in cookies:", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log("Authorization header set!");
    }

    return config;
  },
  (error) => {
   
    return Promise.reject(error);
  }
);

export default axiosInstance;
