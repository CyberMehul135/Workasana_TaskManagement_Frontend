import authAxios from "./axios";

export const getLastWeekCompletedTasks = () =>
  authAxios.get(`/report/last-week`);

export const getProjectWisePendingDays = () => authAxios.get(`/report/pending`);

export const getTaskClosedByTeams = () =>
  authAxios.get(`/report/closed-tasks/teams`);

export const getTasksClosedByOwner = () =>
  authAxios.get(`/report/closed-tasks/owners`);

export const getTasksClosedByProject = () =>
  authAxios.get(`/report/closed-tasks/project`);

export const getTasksByStatus = () =>
  authAxios.get(`/report/tasks/stats/status`);

export const getTasksByPriority = () =>
  authAxios.get(`/report/tasks/stats/priority`);

export const getLastWeekCreatedAndCompletedTasks = () =>
  authAxios.get(`/report/tasks/stats/weekly-created-completed`);
