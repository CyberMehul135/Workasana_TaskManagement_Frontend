import { useTaskFormContext } from "../../contexts/TaskFormContext";
import PopupFormContainer from "../Containers/PopupFormContainer";
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import Checkboxes from "../inputs/Checkboxes";
import { useTaskContext } from "../../contexts/TaskContext";
import { useProjectContext } from "../../contexts/ProjectContext";

export default function TaskForm({ projects, teams, owners, tags }) {
  const { create, taskCreateLoading } = useTaskContext();
  const {
    isTaskFormVisible,
    taskForm,
    handleTaskFormOnChange,
    setIsTaskFormVisible,
    resetTaskForm,
  } = useTaskFormContext();
  const { fetchProjects } = useProjectContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(taskForm);
    await create(taskForm);
    await fetchProjects();
    resetTaskForm();
    setIsTaskFormVisible(false);
  };

  return (
    <PopupFormContainer
      isVisible={isTaskFormVisible}
      title="Create New Task"
      submitBtnLabel="Create"
      onCloseBtnClick={() => setIsTaskFormVisible(false)}
      onSubmit={handleSubmit}
      loading={taskCreateLoading}
    >
      <Input
        label="Task Name"
        placeholder="Enter task name..."
        type="text"
        id="name"
        name="name"
        value={taskForm.name}
        onChange={handleTaskFormOnChange}
      />
      <Select
        label="Project"
        id="project"
        name="project"
        value={taskForm.project}
        onChange={handleTaskFormOnChange}
        firstOption="Select projects"
        options={projects}
      />
      <Select
        label="Team"
        id="team"
        name="team"
        value={taskForm.team}
        onChange={handleTaskFormOnChange}
        firstOption="Select team"
        options={teams}
      />

      {/* Checkboxes */}
      <div>
        <h3 className="text-sm font-medium mb-3 mt-1">Owners</h3>
        <div className="flex flex-wrap gap-3">
          {owners &&
            owners.length > 0 &&
            owners.map((owner) => (
              <Checkboxes
                key={owner._id}
                label={owner.name}
                name="owners"
                value={owner._id}
                onChange={handleTaskFormOnChange}
                formValuelist={taskForm.owners}
              />
            ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-sm font-medium mb-3 mt-1">Tags</h3>
        <div className="flex gap-2">
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => (
              <Checkboxes
                key={tag._id}
                label={tag.name}
                name="tags"
                value={tag._id}
                onChange={handleTaskFormOnChange}
                formValuelist={taskForm.tags}
              />
            ))}
        </div>
      </div>

      <Input
        label="Time to Complete (Days)"
        placeholder="5"
        type="number"
        id="timeToComplete"
        name="timeToComplete"
        value={taskForm.timeToComplete}
        onChange={handleTaskFormOnChange}
      />

      <Select
        label="Status"
        id="status"
        name="status"
        value={taskForm.status}
        onChange={handleTaskFormOnChange}
        firstOption="Select status"
        options={[
          { name: "To Do", _id: "To Do" },
          { name: "In Progress", _id: "In Progress" },
          { name: "Completed", _id: "Completed" },
          { name: "Blocked", _id: "Blocked" },
        ]}
      />
    </PopupFormContainer>
  );
}
