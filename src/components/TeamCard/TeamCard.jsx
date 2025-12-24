import { SquareCheckBig, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TeamCard({ team }) {
  const navigate = useNavigate();
  const { _id, teamName, teamMembers, activeTasks } = team;

  return (
    <article
      className="p-7 bg-surface-white border border-border-primary rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
      onClick={() => navigate(`/teams/${_id}`)}
    >
      <Users className="text-text-blue-400 ml-3 mt-3" size={28} />
      <div className="mt-5 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{teamName}</h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 text-text-primary" />
              <p className="text-text-primary text-sm">Members</p>
            </div>
            <p className="text-text-black-400 text-sm font-semibold">
              {teamMembers?.length}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SquareCheckBig className="w-4 text-text-primary" />
              <p className="text-text-primary text-sm">Active Tasks</p>
            </div>
            <p className="text-text-black-400 text-sm font-semibold">
              {activeTasks?.length}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
