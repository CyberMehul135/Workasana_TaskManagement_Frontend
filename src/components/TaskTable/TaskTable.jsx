import { useNavigate } from "react-router-dom";
import ProfileBadge from "../Badges/ProfileBadge";
import StatusBadge from "../Badges/StatusBadge";
import TaskTableLoading from "../Loadings/TaskTableLoading";
import { getDueDate } from "../../utils/date";
import { Trash2 } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext";
import Button from "../Buttons/Button";

export default function TaskTable({ data, loading, error }) {
  const navigate = useNavigate();
  const { removeTask } = useTaskContext();

  const handleDeleteTask = (e, taskId) => {
    e.stopPropagation();
    e.preventDefault();
    removeTask(taskId);
  };

  if (loading) return <TaskTableLoading />;
  if (error) return <p>{error}</p>;
  if (data) {
    return (
      <>
        {data && data.length > 0 ? (
          <div className="border border-border-primary rounded-lg overflow-hidden max-sm:border-0">
            <table className="w-full">
              <thead className="max-sm:hidden">
                <tr className="border-b border-border-primary">
                  <th className="text-left px-6 py-4 text-base font-medium text-text-primary">
                    Task Name
                  </th>
                  <th className="text-left px-6 py-4 text-base font-medium text-text-primary">
                    Owners
                  </th>
                  <th className="text-left px-6 py-4 text-base font-medium text-text-primary">
                    Due Date
                  </th>
                  <th className="text-left px-6 py-4 text-base font-medium text-text-primary">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-base font-medium text-text-primary">
                    Remove
                  </th>
                </tr>
              </thead>

              <tbody className="bg-surface-white max-sm:bg-transparent max-sm:flex max-sm:flex-col max-sm:gap-3">
                {data?.map((task) => (
                  <tr
                    className="border-b max-sm:grid max-sm:grid-cols-2 max-sm:bg-surface-white max-sm:border max-sm:border-border-primary rounded-lg border-border-primary cursor-pointer hover:bg-surface-gray-300"
                    key={task._id}
                    onClick={() => navigate(`/tasks/${task._id}`)}
                  >
                    <td className="max-sm:col-span-2 text-left px-6 py-4 text-base font-medium text-text-black-400 max-sm:text-lg max-sm:font-semibold max-sm:p-3">
                      {task.name}
                    </td>
                    <td className="max-sm:col-span-2 text-left px-6 py-4 text-base font-medium text-text-black-400 flex items-center max-sm:text-lg max-sm:p-3">
                      {task?.owners?.slice(0, 3).map((user, i) => (
                        <ProfileBadge
                          key={user._id}
                          user={user}
                          className={`max-sm:size-10 ${
                            i !== 0 ? "-ml-2 " : ""
                          }`}
                          index={i}
                        />
                      ))}
                      {task?.owners?.length > 3 && (
                        <ProfileBadge
                          className="-ml-2 max-sm:size-10"
                          extraUsers={USERS.length - 3}
                        />
                      )}
                    </td>
                    <td className="max-sm:col-span-1 text-left px-6 py-4 text-sm font-medium text-text-primary max-sm:text-base max-sm:p-3">
                      <span className="text-text-black-400 hidden max-sm:block font-semibold">
                        Due on :
                      </span>{" "}
                      <span>
                        {getDueDate(task.createdAt, task.timeToComplete)}
                      </span>
                    </td>
                    <td className="max-sm:col-span-1 max-sm:ml-auto max-sm:my-auto text-left px-6 py-4 text-base font-medium text-text-black-400 max-sm:p-3">
                      <StatusBadge
                        status={task?.status}
                        className="max-w-fit font-bold!"
                      />
                    </td>
                    <td className="max-sm:w-full max-sm:col-span-2 max-sm:ml-auto max-sm:my-auto text-left px-6 py-4 text-base font-medium text-text-black-400 max-sm:p-3">
                      <Trash2
                        onClick={(e) => handleDeleteTask(e, task._id)}
                        className="text-text-red-300 active:scale-95 hover:scale-105 max-sm:hidden"
                        size={22}
                      />
                      <Button
                        className="hidden max-sm:block bg-surface-red-400 text-text-red-300! border border-text-red-300 min-w-full! py-2"
                        label="Delete"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No data found.</p>
        )}
      </>
    );
  }
}
