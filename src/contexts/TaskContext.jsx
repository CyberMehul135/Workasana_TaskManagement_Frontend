import { createContext, useContext, useEffect, useState } from "react";
import {
  createTask,
  getTaskById,
  getTasks,
  updateTask,
  deleteTask,
} from "../services/task.services.js";
import { useFiltersContext } from "./FiltersContext.jsx";
import { useReportContext } from "./ReportContext.jsx";
import { useProjectContext } from "./ProjectContext.jsx";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskDetails, setTaskDetails] = useState({});

  const [taskFetchLoading, setTaskFetchLoading] = useState(false);
  const [taskCreateLoading, setTaskCreateLoading] = useState(false);
  const [taskUpdateLoading, setTaskUpdateLoading] = useState(false);
  const [taskDeleteLoading, setTaskDeleteLoading] = useState(false);

  const [taskError, setTaskError] = useState(null);

  const { query } = useFiltersContext();
  const {
    fetchLastWeekCompletedTasks,
    fetchProjectWisePendingDays,
    fetchTaskClosedByTeams,
    fetchTasksClosedByOwner,
    fetchTasksClosedByProject,
    fetchTasksByStatus,
    fetchTasksByPriority,
    fetchLastWeekCreatedAndCompletedTasks,
  } = useReportContext();
  const { fetchProjects } = useProjectContext();

  const fetchTask = async () => {
    try {
      setTaskFetchLoading(true);
      setTaskError(null);

      const res = await getTasks(query);
      setTasks(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setTaskFetchLoading(false);
    }
  };

  const fetchTaskById = async (id) => {
    try {
      setTaskFetchLoading(true);
      setTaskError(null);

      const res = await getTaskById(id);
      setTaskDetails(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setTaskFetchLoading(false);
    }
  };

  const create = async (task) => {
    try {
      setTaskCreateLoading(true);
      setTaskError(null);

      await createTask(task);
      await fetchTask();
      await fetchTask();
    } catch (err) {
      handleError(err);
    } finally {
      setTaskCreateLoading(false);
    }
  };

  const update = async (id, task) => {
    try {
      setTaskUpdateLoading(true);
      setTaskError(null);

      await updateTask(id, task);
      await fetchTaskById(id);
      await fetchTask();
      await fetchLastWeekCompletedTasks();
      await fetchProjectWisePendingDays();
      await fetchTaskClosedByTeams();
      await fetchTasksClosedByOwner();
      await fetchTasksClosedByProject();
      await fetchTasksByStatus();
      await fetchTasksByPriority();
      await fetchLastWeekCreatedAndCompletedTasks();
      await fetchProjects();
    } catch (err) {
      handleError(err);
    } finally {
      setTaskUpdateLoading(false);
    }
  };

  const removeTask = async (id) => {
    try {
      setTaskDeleteLoading(true);
      setTaskError(null);

      await deleteTask(id);
      await fetchTask();
    } catch (err) {
      handleError(err);
    } finally {
      setTaskDeleteLoading(false);
    }
  };

  const handleError = (err) => {
    setTaskError(
      err.response?.data?.message || err.message || "Something went wrong"
    );
  };

  useEffect(() => {
    if (query === null) return; // wait
    fetchTask();
  }, [query]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskFetchLoading,
        taskCreateLoading,
        taskUpdateLoading,
        taskError,
        create,
        update,
        fetchTaskById,
        taskDetails,
        fetchTask,
        taskDeleteLoading,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
