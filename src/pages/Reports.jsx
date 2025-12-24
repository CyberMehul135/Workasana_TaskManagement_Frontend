import Header from "../components/Header/Header";
import Heading1 from "../components/Headings/Heading1";
import Sidebar from "../components/Sidebar/Sidebar";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { useReportContext } from "../contexts/ReportContext";

// Chart Size Maintainance
defaults.maintainAspectRatio = false;
defaults.responsive = true;
// Chart Heading Maintainance
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function Reports() {
  const {
    lastWeekCompletedTasks,
    projectWisePendingdays,
    taskClosedByTeams,
    taskClosedByOwner,
    taskClosedByProject,
  } = useReportContext();

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chartData = days.map((day) => {
    const found = lastWeekCompletedTasks?.tasks?.find(
      (item) => item.day === day
    );
    return found ? found.count : 0;
  });

  return (
    <>
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Header />
        <main className="flex-1 h-screen min-h-screen bg-surface-primary p-9 overflow-y-scroll max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5">
          <Heading1
            heading="Reports"
            subHeading="Analytics and insights for your tasks."
            className="mb-8"
          />

          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            <div className="min-h-[350px] col-span-1 max-md:col-span-2 bg-surface-white border border-border-primary p-6 rounded-lg">
              <Bar
                data={{
                  labels: days?.map((v) => v),
                  datasets: [
                    {
                      label: "Completed Task",
                      data: chartData,
                      backgroundColor: ["#2463EB"],
                      borderRadius: 5,
                      borderColor: ["#2463EB"],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Completed Tasks Last Week",
                    },
                  },
                }}
              />
            </div>
            <div className="min-h-[350px] col-span-1 max-md:col-span-2 bg-surface-white border border-border-primary p-6 rounded-lg">
              <Bar
                data={{
                  labels: projectWisePendingdays?.data?.map(
                    (project) => project.projectName
                  ),
                  datasets: [
                    {
                      axis: "y",
                      label: "Pending Days",
                      data: projectWisePendingdays?.data?.map(
                        (project) => project.totalPendingDays
                      ),
                      backgroundColor: ["#F59F0A"],
                      borderRadius: 5,
                      borderColor: ["#F59F0A"],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Pending Work (Days) by Project",
                    },
                  },
                  indexAxis: "y",
                }}
              />
            </div>
            <div className="min-h-[350px] col-span-1 max-md:col-span-2 bg-surface-white border border-border-primary p-6 rounded-lg">
              <Pie
                data={{
                  labels: taskClosedByTeams?.tasks?.map((v) => v.teamName),
                  datasets: [
                    {
                      label: "Closed Tasks",
                      data: taskClosedByTeams?.tasks?.map(
                        (v) => v.totalClosedTasks
                      ),
                      backgroundColor: [
                        "#9C2AD5",
                        "#2463EB",
                        "#F59F0A",
                        "#16A249",
                      ],
                      borderRadius: 5,
                      hoverOffset: 4,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Task Closed by Team",
                    },
                  },
                }}
              />
            </div>
            <div className="min-h-[350px] col-span-1 max-md:col-span-2 bg-surface-white border border-border-primary p-6 rounded-lg">
              <Bar
                data={{
                  labels: taskClosedByOwner?.tasks?.map((v) => v.ownerName),
                  datasets: [
                    {
                      label: "Closed Tasks",
                      data: taskClosedByOwner?.tasks?.map(
                        (v) => v.totalClosedTasks
                      ),
                      backgroundColor: ["#16A249"],
                      borderRadius: 5,
                      borderColor: ["#16A249"],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Tasks Closed by Owner",
                    },
                  },
                }}
              />
            </div>
            <div className="min-h-[350px] col-span-2 bg-surface-white border border-border-primary p-6 rounded-lg ">
              <Bar
                data={{
                  labels: taskClosedByProject?.tasks?.map((v) => v.projectName),
                  datasets: [
                    {
                      label: "Closed Tasks",
                      data: taskClosedByProject?.tasks?.map(
                        (v) => v.totalClosedTasks
                      ),
                      backgroundColor: ["#9C2AD5"],
                      borderRadius: 5,
                      borderColor: ["#9C2AD5"],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Tasks Closed by Project",
                    },
                  },
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
