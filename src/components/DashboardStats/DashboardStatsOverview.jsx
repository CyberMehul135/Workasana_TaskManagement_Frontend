import { CircleAlert, CircleCheck, Clock4, TrendingUp } from "lucide-react";
import DashboardStatCard from "./DashboardStatCard";
import { useReportContext } from "../../contexts/ReportContext";
import { useTaskContext } from "../../contexts/TaskContext";
import DashboardStatCardLoading from "../Loadings/DashboardStatCardLoading";

export default function DashboardStatsOverview() {
  const { tasksByStatus, tasksByStatusLoading } = useReportContext();
  const { tasks } = useTaskContext();

  if (tasksByStatusLoading) return <DashboardStatCardLoading />;
  if (tasksByStatus) {
    return (
      <div className="grid gap-4 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-8">
        <DashboardStatCard
          title="Total Tasks"
          value={tasks?.tasks?.length}
          icon={TrendingUp}
          iconStyle="bg-surface-blue-300 text-text-blue-400"
        />

        <DashboardStatCard
          title="Completed"
          value={tasksByStatus?.tasks?.Completed || 0}
          icon={CircleCheck}
          iconStyle="bg-surface-green-400 text-text-green-300"
        />
        <DashboardStatCard
          title="In Progress"
          value={
            (tasksByStatus?.tasks && tasksByStatus?.tasks["In Progress"]) || 0
          }
          icon={Clock4}
          iconStyle="bg-surface-orange-300 text-text-orange-400"
        />
        <DashboardStatCard
          title="Blocked"
          value={tasksByStatus?.tasks?.Blocked || 0}
          icon={CircleAlert}
          iconStyle="bg-surface-red-400 text-text-red-300"
        />
      </div>
    );
  }
}
