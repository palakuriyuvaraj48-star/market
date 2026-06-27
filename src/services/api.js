import axios from "axios";

export const api = axios.create({
  baseURL: "/mock-api",
  timeout: 600
});

export const mockDelay = (value, delay = 220) =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(value), delay);
  });
