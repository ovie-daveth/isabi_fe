import { useEffect } from "react";
import axios from "axios";
import { getCookie, getToken } from "@/lib/helpers"; // Ensure getCookie() is correctly retrieving cookies

// Create an Axios instance

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: import.meta.env.VITE_NODE_ENV === "development" ? "/api" : import.meta.env.VITE_API_BASE_URL ,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to attach Bearer Token OR Cookie
api.interceptors.request.use(
  (config) => {
    const token = getToken(); // Token from local storage
    const cookieToken = getCookie("loginVerificationToken"); // Token from cookies
    console.log("cookies checker", cookieToken)

    // Prioritize cookie token if available
    if (cookieToken) {
      config.headers.Authorization = `Bearer ${cookieToken}`;
    } else if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for handling errors (optional)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Redirecting to login...");
      // Optional: Handle logout or refresh logic
    }
    return Promise.reject(error);
  }
);

// Custom Hook to use Axios instance
export const useAxios = () => {
  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  return api;
};
