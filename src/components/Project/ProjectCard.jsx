import { useNavigate } from "react-router-dom";
import { getPercentage } from "../../utils/format";
import File1 from "../../assets/file1.svg?react";
import { EllipsisVertical } from "lucide-react";
import { useDeleteAlertContext } from "../../contexts/DeleteAlertContext";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const { isDeleteAlertVisible, setIsDeleteAlertVisible } =
    useDeleteAlertContext();

  return (
    <article
      onClick={() => navigate(`/projects/${project._id}`)}
      className="max-w-[442px] bg-surface-white border border-border-primary rounded-lg p-5 hover:shadow-lg group hover:-translate-y-0.5 transition-all cursor-pointer"
    >
      {/* Title */}
      <div className="flex items-center gap-3 relative">
        <File1 className="text-text-blue-400 w-12" />
        <div>
          <h3 className="text-base font-medium">{project.name}</h3>
          <p className="text-sm text-text-primary ">{project.description}</p>
        </div>
        <EllipsisVertical
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDeleteAlertVisible({
              visible: true,
              _id: project._id,
              name: project.name,
            });
          }}
          className="absolute right-0 -top-2 hidden max-sm:block group-hover:block hover:bg-surface-gray-400 py-1 px-0.5 rounded-lg box-content text-text-primary"
          size={17}
        />
      </div>
      {/* Progress-bar */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-text-primary font-medium">Progrress</p>
          <p className="text-sm text-text-black">
            {getPercentage(project.totalTasks, project.completedTasks)}%
          </p>
        </div>
        <div className="w-full h-2 bg-surface-gray-400 rounded-3xl overflow-hidden my-2">
          <div
            style={{
              width: `${getPercentage(
                project.totalTasks,
                project.completedTasks
              )}%`,
            }}
            className={`h-full bg-surface-blue-400`}
          ></div>
        </div>
        <div>
          <p className="text-xs text-text-primary font-medium">
            <span>{project.completedTasks}</span> of{" "}
            <span>{project.totalTasks}</span> tasks completed
          </p>
        </div>
      </div>
    </article>
  );
}
