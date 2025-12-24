export const isAuthenticated = () => {
  const token = localStorage.getItem("adminToken");
  return !!token;
};
