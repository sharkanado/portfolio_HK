import axios from "axios";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api"
    : process.env.API_URL;

const api = axios.create({
  baseURL,
});

// We have to put in auth header every time we make a request and we have to
// get the latest token from the cognito auth so we use an interceptor
api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${process.env.API_KEY}`;
  console.log(`Bearer ${process.env.API_KEY}`);
  return config;
});

export default api;
