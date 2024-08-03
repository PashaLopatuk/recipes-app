import axios from "axios";
import {BASE_URL} from "@/api/const";

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => {
    Promise.reject(error).then();
  }
);
