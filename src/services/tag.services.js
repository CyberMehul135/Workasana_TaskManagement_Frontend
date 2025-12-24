import authAxios from "./axios";

export const getTags = () => authAxios.get(`/tags`);
