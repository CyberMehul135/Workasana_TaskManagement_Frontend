import { createContext, useContext, useState } from "react";

const TaskFormContext = createContext();

export const useTaskFormContext = () => useContext(TaskFormContext);

export const TaskFormProvider = ({ children }) => {
  const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
  const [taskForm, setTaskForm] = useState({
    name: "",
    project: "",
    team: "",
    owners: [],
    tags: [],
    timeToComplete: "",
    status: "",
  });

  const handleTaskFormOnChange = (e) => {
    const { value, name, checked } = e.target;
    if (name === "owners" || name === "tags") {
      setTaskForm((pre) => ({
        ...pre,
        [name]: checked
          ? [...pre[name], value]
          : pre[name].filter((v) => value != v),
      }));
    } else {
      setTaskForm((pre) => ({ ...pre, [name]: value }));
    }
  };

  const resetTaskForm = () => {
    setTaskForm({
      name: "",
      project: "",
      team: "",
      owners: [],
      tags: [],
      timeToComplete: "",
      status: "",
    });
  };

  return (
    <TaskFormContext.Provider
      value={{
        taskForm,
        handleTaskFormOnChange,
        isTaskFormVisible,
        setIsTaskFormVisible,
        resetTaskForm,
      }}
    >
      {children}
    </TaskFormContext.Provider>
  );
};
