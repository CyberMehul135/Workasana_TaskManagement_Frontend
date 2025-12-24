import authAxios from "./axios";

export const getProjects = (query = "") =>
  authAxios.get(`/projects${query ? `${query}` : ""}`);

export const getProjectById = (id) => authAxios.get(`/projects/${id}`);

export const createProject = (data) => authAxios.post(`/projects`, data);

export const updateProject = (id, data) =>
  authAxios.post(`/projects/${id}`, data);

export const deleteProject = (id) => authAxios.delete(`/projects/${id}`);
