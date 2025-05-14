import axios from "axios";
import { TOKEN_STORAGE_KEY } from "../constants";

// ─────────────────────────────────────────────────────────────────────────────

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ─── Interceptors ────────────────────────────────────────────────────────────

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);