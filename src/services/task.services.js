import authAxios from "./axios";

export const getTasks = (query = "") => authAxios.get(`/tasks?${query}`);
export const getTaskById = (id) => authAxios.get(`/tasks/${id}`);
export const createTask = (data) => authAxios.post(`/tasks`, data);
export const updateTask = (id, data) => authAxios.post(`/tasks/${id}`, data);
export const deleteTask = (id) => authAxios.delete(`/tasks/${id}`);
