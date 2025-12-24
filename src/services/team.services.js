import authAxios from "./axios";

export const getTeams = () => authAxios.get(`/teams`);
export const getTeamById = (id) => authAxios.get(`/teams/${id}`);
export const createTeam = (data) => authAxios.post(`/teams`, data);
export const updateTeam = (id, data) => authAxios.post(`/teams/${id}`, data);
export const deleteTeam = (id) => authAxios.delete(`/teams/${id}`);
