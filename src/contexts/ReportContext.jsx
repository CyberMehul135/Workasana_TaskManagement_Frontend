import { createContext, useContext, useEffect, useState } from "react";
import {
  getLastWeekCompletedTasks,
  getLastWeekCreatedAndCompletedTasks,
  getProjectWisePendingDays,
  getTaskClosedByTeams,
  getTasksByPriority,
  getTasksByStatus,
  getTasksClosedByOwner,
  getTasksClosedByProject,
} from "../services/report.services";

const ReportContext = createContext();

export const useReportContext = () => useContext(ReportContext);

export const ReportProvider = ({ children }) => {
  const [lastWeekCompletedTasks, setLastWeekCompletedTasks] = useState([]);
  const [projectWisePendingdays, setProjectWisePendingdays] = useState([]);
  const [taskClosedByTeams, setTaskClosedByTeams] = useState([]);
  const [taskClosedByOwner, setTaskClosedByOwner] = useState([]);
  const [taskClosedByProject, setTaskClosedByProject] = useState([]);
  const [tasksByStatus, setTasksByStatus] = useState({});
  const [tasksByPriority, setTasksByPriority] = useState([]);
  const [
    lastWeekCreatedAndCompletedTasks,
    setLastWeekCreatedAndCompletedTasks,
  ] = useState([]);

  const [lastWeekCompletedTasksLoading, setLastWeekCompletedTasksLoading] =
    useState(false);
  const [tasksByStatusLoading, setTasksByStatusLoading] = useState(false);

  const [lastWeekCompletedTasksError, setLastWeekCompletedTasksError] =
    useState(null);

  const fetchLastWeekCompletedTasks = async () => {
    try {
      setLastWeekCompletedTasksLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getLastWeekCompletedTasks();
      setLastWeekCompletedTasks(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLastWeekCompletedTasksLoading(false);
    }
  };

  const fetchProjectWisePendingDays = async () => {
    try {
      setLastWeekCompletedTasksLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getProjectWisePendingDays();
      setProjectWisePendingdays(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLastWeekCompletedTasksLoading(false);
    }
  };

  const fetchTaskClosedByTeams = async () => {
    try {
      setLastWeekCompletedTasksLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getTaskClosedByTeams();
      setTaskClosedByTeams(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLastWeekCompletedTasksLoading(false);
    }
  };

  const fetchTasksClosedByOwner = async () => {
    try {
      setLastWeekCompletedTasksLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getTasksClosedByOwner();
      setTaskClosedByOwner(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLastWeekCompletedTasksLoading(false);
    }
  };

  const fetchTasksClosedByProject = async () => {
    try {
      setLastWeekCompletedTasksLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getTasksClosedByProject();
      setTaskClosedByProject(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLastWeekCompletedTasksLoading(false);
    }
  };

  const fetchTasksByStatus = async () => {
    try {
      setTasksByStatusLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getTasksByStatus();
      setTasksByStatus(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setTasksByStatusLoading(false);
    }
  };

  const fetchTasksByPriority = async () => {
    try {
      setLastWeekCompletedTasksLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getTasksByPriority();
      setTasksByPriority(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLastWeekCompletedTasksLoading(false);
    }
  };

  const fetchLastWeekCreatedAndCompletedTasks = async () => {
    try {
      setLastWeekCompletedTasksLoading(true);
      setLastWeekCompletedTasksError(null);

      const res = await getLastWeekCreatedAndCompletedTasks();
      setLastWeekCreatedAndCompletedTasks(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLastWeekCompletedTasksLoading(false);
    }
  };

  const handleError = (err) => {
    setLastWeekCompletedTasksError(
      err.response?.data?.message || err.response || "Something went wrong"
    );
  };

  useEffect(() => {
    fetchLastWeekCompletedTasks();
    fetchProjectWisePendingDays();
    fetchTaskClosedByTeams();
    fetchTasksClosedByOwner();
    fetchTasksClosedByProject();
    fetchTasksByStatus();
    fetchTasksByPriority();
    fetchLastWeekCreatedAndCompletedTasks();
  }, []);

  return (
    <ReportContext.Provider
      value={{
        lastWeekCompletedTasks,
        lastWeekCompletedTasksLoading,
        lastWeekCompletedTasksError,

        projectWisePendingdays,
        taskClosedByTeams,
        taskClosedByOwner,
        taskClosedByProject,
        tasksByStatus,
        tasksByStatusLoading,
        tasksByPriority,
        lastWeekCreatedAndCompletedTasks,
        fetchLastWeekCompletedTasks,
        fetchProjectWisePendingDays,
        fetchTaskClosedByTeams,
        fetchTasksClosedByOwner,
        fetchTasksClosedByProject,
        fetchTasksByStatus,
        fetchTasksByPriority,
        fetchLastWeekCreatedAndCompletedTasks,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};
