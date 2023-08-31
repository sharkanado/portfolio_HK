import axios from "axios";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337/api"
    : process.env.API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
  return config;
});

export default api;
