import axios from "axios";
import authAxios from "./axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const loginService = (data) => axios.post(`${API_URL}/auth/login`, data);

export const signupService = (data) =>
  axios.post(`${API_URL}/auth/signup`, data);

export const getUser = () => authAxios.get(`/auth/me`);

export const updateUser = (id, data) => authAxios.post(`/auth/me/${id}`, data);
