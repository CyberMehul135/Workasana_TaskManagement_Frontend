import { MoveLeft } from "lucide-react";
import Button from "../components/Buttons/Button";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { useProjectContext } from "../contexts/ProjectContext";

export default function Task() {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const {
    taskDetails,
    taskFetchLoading,
    taskUpdateLoading,
    taskError,
    fetchTaskById,
    update,
  } = useTaskContext();
  const { fetchProjects } = useProjectContext();

  const handleMarkComplete = async () => {
    await update(taskId, { status: "Completed" });
    await fetchProjects();
  };

  useEffect(() => {
    fetchTaskById(taskId);
  }, [taskId]);

  return (
    <>
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Header />
        <main className="flex-1 h-screen min-h-screen overflow-y-scroll bg-surface-primary p-9 max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5">
          <Button
            label="Back"
            icon={MoveLeft}
            className="bg-transparent text-text-primary! hover:bg-transparent hover:text-text-black-400! max-w-[150px] p-0! mb-6 max-sm:hidden"
            onClick={() => navigate(-1)}
          />
          <TaskDetails
            data={taskDetails?.task}
            loading={taskFetchLoading}
            taskUpdateLoading={taskUpdateLoading}
            error={taskError}
            onMarkComplete={handleMarkComplete}
          />
        </main>
      </div>
    </>
  );
}
