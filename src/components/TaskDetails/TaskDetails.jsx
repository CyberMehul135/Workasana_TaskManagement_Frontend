import StatusBadge from "../Badges/StatusBadge";
import Button from "../Buttons/Button";
import File from "../../assets/file.svg?react";
import Team from "../../assets/users.svg?react";
import TaskInfoCard from "./TaskInfoCard";
import TagBadge from "../Badges/TagBadge";
import { Calendar, ChevronDown, Clock4 } from "lucide-react";
import { arrayToString } from "../../utils/format";
import { getDueDate, getRemainingDays } from "../../utils/date";
import TaskDetailsLoading from "../Loadings/TaskDetailsLoading";
import { useParams } from "react-router-dom";
import { useTaskUpdateForm } from "../../contexts/TaskUpdateFormContext";
import { useEffect } from "react";

export default function TaskDetails({
  data,
  loading,
  taskUpdateLoading,
  error,
  onMarkComplete,
}) {
  const { taskId } = useParams();
  const { setTaskId, taskUpdateForm, handleOnChangeTaskUpdateForm } =
    useTaskUpdateForm();

  useEffect(() => {
    setTaskId(taskId);
  }, [taskId]);

  if (loading) return <TaskDetailsLoading />;
  if (error) return <p>{error}</p>;
  if (data) {
    return (
      <article className="max-w-[832px] p-8 max-md:p-5 bg-surface-white rounded-lg border border-border-primary">
        <header className="flex justify-between items-start mb-6 max-sm:gap-4 max-sm:flex-col">
          <div className="flex flex-col gap-3 max-sm:gap-2">
            <h2 className="text-2xl font-semibold">{data?.name}</h2>
            {taskUpdateLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="relative w-fit">
                <select
                  className={`rounded-xl px-4 py-1 text-sm min-w-[150px] font-semibold appearance-none ${
                    taskUpdateForm.status === "To Do"
                      ? "bg-surface-blue-300 text-text-blue-400 border border-border-blue-400"
                      : taskUpdateForm.status === "In Progress"
                      ? "bg-surface-yellow-400 text-text-yellow-400 border border-text-yellow-400"
                      : taskUpdateForm.status === "Completed"
                      ? "bg-surface-green-400 text-text-green-300 border border-text-green-300"
                      : taskUpdateForm.status === "Blocked" &&
                        "bg-surface-red-400 text-text-red-300 border border-text-red-300"
                  }`}
                  id="status"
                  name="status"
                  value={taskUpdateForm.status}
                  onChange={handleOnChangeTaskUpdateForm}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Blocked">Blocked</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute text-text-primary pointer-events-none top-1/2 -translate-1/2 right-0"
                />
              </div>
            )}
          </div>
          <Button
            label={`${taskUpdateLoading ? "Loading...." : "Mark as Complete"}`}
            className="max-w-fit px-5 bg-surface-green-500 hover:bg-surface-green-500 hover:scale-98 max-sm:max-w-full max-sm:justify-center"
            onClick={onMarkComplete}
          />
        </header>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          <TaskInfoCard
            title="Project"
            value={data?.project?.name}
            icon={File}
          />
          <TaskInfoCard title="Team" value={data?.team?.name} icon={Team} />
          <TaskInfoCard
            title="Owners"
            value={arrayToString(data?.owners, "name")}
            icon={Team}
          />
          <TaskInfoCard
            title="Due Date"
            value={getDueDate(data?.createdAt, data?.timeToComplete)}
            icon={Calendar}
          />
          <TaskInfoCard
            title="Time Remaining"
            value={`${getRemainingDays(
              data?.createdAt,
              data?.timeToComplete
            )} Days`}
            icon={Clock4}
          />
          <TaskInfoCard
            title="Estimated Time"
            value={`${data?.timeToComplete} Days`}
            icon={Clock4}
          />
        </div>

        <div className="mt-6 mb-4 text-text-primary border-b border-border-primary" />

        <footer className="flex items-center">
          <p className="text-text-primary text-base font-semibold mr-3">
            Tags :
          </p>
          <div className="flex gap-3">
            {data?.tags?.map((tag, i) => (
              <TagBadge key={tag._id} tag={tag.name} />
            ))}
          </div>
        </footer>
      </article>
    );
  }
}
