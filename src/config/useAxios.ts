import { useEffect } from "react";
import axios from "axios";
import { getCookie, getToken, getUserId } from "@/lib/helpers";

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

console.log("url", import.meta.env.VITE_API_URL)
console.log("token, userId", getToken(), getUserId())
console.log("cookies", getCookie("loginVerificationToken"))

// Request Interceptor to attach Bearer Token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
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
      // Optional: Logout user or refresh token logic here
    }
    return Promise.reject(error);
  }
);

// Custom Hook to use Axios instance 
export const useAxios = () => {
  useEffect(() => {
    return () => {
      // Cleanup function (if needed)
    };
  }, []);

  return api;
};
