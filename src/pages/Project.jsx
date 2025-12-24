import Header from "../components/Header/Header";
import Heading1 from "../components/Headings/Heading1";
import Sidebar from "../components/Sidebar/Sidebar";
import Plus from "../assets/plus.svg?react";
import TaskTable from "../components/TaskTable/TaskTable";
import FilterButton from "../components/Buttons/FilterButton";
import { Funnel } from "lucide-react";
import { useFiltersContext } from "../contexts/FiltersContext";
import FiltersContainer from "../components/Containers/FiltersContainer";
import Select from "../components/inputs/Select";
import TaskForm from "../components/TaskForm/TaskForm";
import { useTaskFormContext } from "../contexts/TaskFormContext";
import { useTaskContext } from "../contexts/TaskContext";
import { useEffect } from "react";
import { useTagsContext } from "../contexts/TagsContext";
import { useParams } from "react-router-dom";
import { useProjectContext } from "../contexts/ProjectContext";
import { useTeamContext } from "../contexts/TeamContext";
import { useOwnersContext } from "../contexts/OwnersContext";

export default function Project() {
  const { projectId } = useParams();
  const { setIsFiltersVisible, filters, handleFilterOnChange } =
    useFiltersContext();
  const { setIsTaskFormVisible } = useTaskFormContext();
  const { tasks, taskFetchLoading, taskError } = useTaskContext();
  const { tags, tagsFetchLoading, tagsError } = useTagsContext();
  const { resetFilter, query, setQuery, setFilters } = useFiltersContext();
  const {
    projects,
    projectsLoading,
    projectsError,
    fetchProjectById,
    projectDetails,
    projectDetailsLoading,
    projectDetailsError,
  } = useProjectContext();
  const { teams, teamsFetchLoading, teamsError } = useTeamContext();
  const { owners, ownersFetchLoading, ownersError } = useOwnersContext();

  useEffect(() => {
    resetFilter();
    setFilters((pre) => ({ ...pre, project: projectId }));
    fetchProjectById(projectId);
  }, [projectId]);

  return (
    <>
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Header />
        <main className="flex-1 h-screen min-h-screen overflow-y-scroll bg-surface-primary p-8 max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5">
          <Heading1
            heading={projectDetails?.project?.name}
            subHeading={projectDetails?.project?.description}
            btnLabel="Add New Task"
            btnIcon={Plus}
            onBtnClick={() => setIsTaskFormVisible(true)}
            className="mb-6"
          />

          <FiltersContainer>
            <Select
              id="tags"
              name="tags"
              value={filters.tags}
              onChange={handleFilterOnChange}
              firstOption="Tags"
              options={tags?.tags}
            />

            <Select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleFilterOnChange}
              firstOption="Status"
              options={[
                { _id: "To Do", name: "To Do" },
                { _id: "In Progress", name: "In Progress" },
                { _id: "Completed", name: "Completed" },
                { _id: "Blocked", name: "Blocked" },
              ]}
            />
          </FiltersContainer>

          <TaskTable
            data={tasks?.tasks}
            loading={taskFetchLoading}
            error={taskError}
          />

          <FilterButton
            icon={Funnel}
            onClick={() => setIsFiltersVisible(true)}
          />
          <TaskForm
            projects={projects?.projects}
            teams={teams?.teams}
            owners={owners?.owners}
            tags={tags?.tags}
          />
        </main>
      </div>
    </>
  );
}
