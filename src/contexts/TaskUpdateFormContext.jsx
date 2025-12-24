import { createContext, useContext, useEffect, useState } from "react";
import { useTaskContext } from "./TaskContext";

const TaskUpdateFormContext = createContext();

export const useTaskUpdateForm = () => useContext(TaskUpdateFormContext);

export const TaskUpdateProvider = ({ children }) => {
  const [taskUpdateForm, setTaskUpdateForm] = useState({ status: "" });

  // Code : For Initial TaskUpdateForm data
  const [taskId, setTaskId] = useState(null);
  const { fetchTaskById, taskDetails, update } = useTaskContext();

  const handleOnChangeTaskUpdateForm = async (e) => {
    const { name, value } = e.target;
    setTaskUpdateForm({ status: value });
    await update(taskId, { status: value });
  };

  const setInitialFormValue = () => {
    setTaskUpdateForm({ status: taskDetails?.task?.status });
  };

  useEffect(() => {
    setInitialFormValue();
  }, [taskDetails]);

  useEffect(() => {
    if (!taskId) return;
    fetchTaskById(taskId);
  }, [taskId]);

  return (
    <TaskUpdateFormContext.Provider
      value={{ taskUpdateForm, handleOnChangeTaskUpdateForm, setTaskId }}
    >
      {children}
    </TaskUpdateFormContext.Provider>
  );
};
