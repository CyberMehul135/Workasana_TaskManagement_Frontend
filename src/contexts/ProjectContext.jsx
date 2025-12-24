import { createContext, useContext, useEffect, useState } from "react";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
} from "../services/project.services.js";

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectLoading] = useState(false);
  const [projectsError, setProjectError] = useState(null);

  const [projectCreateLoading, setProjectCreateLoading] = useState(false);
  const [projectCreateError, setProjectCreateError] = useState(null);

  const [projectDeleteLoading, setProjectDeleteLoading] = useState(false);
  const [projectDeleteError, setProjectDeleteError] = useState(null);

  const [projectDetails, setprojectDetails] = useState({});
  const [projectDetailsLoading, setprojectDetailsLoading] = useState({});
  const [projectDetailsError, setprojectDetailsError] = useState({});

  const fetchProjects = async (query = "") => {
    try {
      setProjectLoading(true);
      setProjectError(null);

      const res = await getProjects(query);
      setProjects(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setProjectLoading(false);
    }
  };

  const fetchProjectById = async (id) => {
    try {
      setprojectDetailsLoading(true);
      setprojectDetailsError(null);

      const res = await getProjectById(id);
      setprojectDetails(res.data);
    } catch (err) {
      setprojectDetailsError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setprojectDetailsLoading(false);
    }
  };

  const create = async (project) => {
    try {
      setProjectCreateLoading(true);
      setProjectCreateError(null);

      await createProject(project);
      await fetchProjects();
    } catch (err) {
      setProjectCreateError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setProjectCreateLoading(false);
    }
  };

  const remove = async (id) => {
    try {
      setProjectDeleteLoading(true);
      setProjectDeleteError(null);

      await deleteProject(id);
      await fetchProjects();
    } catch (err) {
      setProjectDeleteError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setProjectDeleteLoading(false);
    }
  };

  const handleError = (err) => {
    setProjectError(
      err.response?.data?.message || err.message || "Something went wrong"
    );
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        projectsLoading,
        projectsError,
        fetchProjects,
        create,
        remove,
        projectDeleteLoading,
        projectDeleteError,
        fetchProjectById,
        projectDetails,
        projectDetailsLoading,
        projectDetailsError,
        projectCreateLoading,
        projectCreateError,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
