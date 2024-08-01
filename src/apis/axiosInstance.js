import axios from 'axios';
import {handleTokenError} from "@/apis/interceptor.js";

export const axiosInstance = axios.create({
  baseURL: 'https://localhost:8080',
  timeout: 500,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError, // 응답 에러는 handleTokenError 에서 처리
);
