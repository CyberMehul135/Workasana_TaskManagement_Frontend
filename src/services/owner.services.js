import authAxios from "./axios";

export const getOwners = () => authAxios.get(`/owners`);
export const createOwners = (data) => authAxios.get(`/owners`, data);
