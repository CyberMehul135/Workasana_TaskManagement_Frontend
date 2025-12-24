import { createContext, useContext, useState } from "react";

const ProjectFormContext = createContext();

export const useProjectFormContext = () => useContext(ProjectFormContext);

export const ProjectFormProvider = ({ children }) => {
  const [isProjectFormVisible, setIsProjectFormVisible] = useState(false);
  const [projectForm, setProjectForm] = useState({ name: "", description: "" });

  const handleProjectFormOnChange = (e) => {
    const { value, name } = e.target;
    setProjectForm((pre) => ({ ...pre, [name]: value }));
  };

  const resetProjectForm = () => {
    setProjectForm({ name: "", description: "" });
  };

  return (
    <ProjectFormContext.Provider
      value={{
        projectForm,
        handleProjectFormOnChange,
        isProjectFormVisible,
        setIsProjectFormVisible,
        resetProjectForm,
      }}
    >
      {children}
    </ProjectFormContext.Provider>
  );
};
