import Header from "../components/Header/Header";
import Heading1 from "../components/Headings/Heading1";
import Sidebar from "../components/Sidebar/Sidebar";
import Plus from "../assets/plus.svg?react";
import Select from "../components/inputs/Select";
import TaskTable from "../components/TaskTable/TaskTable";
import FiltersContainer from "../components/Containers/FiltersContainer";
import { Funnel } from "lucide-react";
import { useFiltersContext } from "../contexts/FiltersContext";
import FilterButton from "../components/Buttons/FilterButton";
import TaskForm from "../components/TaskForm/TaskForm";
import { useTaskFormContext } from "../contexts/TaskFormContext";
import { useTaskContext } from "../contexts/TaskContext";
import { useProjectContext } from "../contexts/ProjectContext";
import { useTeamContext } from "../contexts/TeamContext";
import { useOwnersContext } from "../contexts/OwnersContext";
import { useTagsContext } from "../contexts/TagsContext";
import { useEffect } from "react";

export default function Tasks() {
  const { setIsFiltersVisible, filters, handleFilterOnChange, resetFilter } =
    useFiltersContext();
  const { setIsTaskFormVisible } = useTaskFormContext();
  const { tasks, taskFetchLoading, taskError } = useTaskContext();
  const { projects, projectsLoading, projectsError } = useProjectContext();
  const { teams, teamsFetchLoading, teamsError } = useTeamContext();
  const { owners, ownersFetchLoading, ownersError } = useOwnersContext();
  const { tags, tagsFetchLoading, tagsError } = useTagsContext();

  useEffect(() => {
    resetFilter();
  }, []);

  return (
    <>
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Header />
        <main className="flex-1 h-screen min-h-screen overflow-y-scroll bg-surface-primary p-9 max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5 ">
          <Heading1
            heading="All Tasks"
            subHeading="View and filter all tasks across projects"
            btnLabel="Add New Task"
            btnIcon={Plus}
            onBtnClick={() => setIsTaskFormVisible(true)}
            className="mb-6"
          />

          <FiltersContainer>
            <Select
              id="project"
              name="project"
              value={filters.project}
              onChange={handleFilterOnChange}
              firstOption="All Project"
              options={projects?.projects}
            />
            <Select
              id="tags"
              name="tags"
              value={filters.tags}
              onChange={handleFilterOnChange}
              firstOption="All Tags"
              options={tags?.tags}
            />
            <Select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleFilterOnChange}
              firstOption="All Status"
              options={[
                { _id: "To Do", name: "To Do" },
                { _id: "In Progress", name: "In Progress" },
                { _id: "Completed", name: "Completed" },
                { _id: "Blocked", name: "Blocked" },
              ]}
            />
            <Select
              id="sort"
              name="sort"
              value={filters.sort}
              onChange={handleFilterOnChange}
              firstOption="Sort"
              options={[
                { _id: "asc", name: "Old - New" },
                { _id: "desc", name: "New - Old" },
                { _id: "tags", name: "Priority" },
              ]}
            />
          </FiltersContainer>

          <TaskTable
            data={tasks.tasks}
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
