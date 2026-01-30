import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { useReportContext } from "../../contexts/ReportContext";

// Chart Size Maintainance
defaults.maintainAspectRatio = false;
defaults.responsive = true;
// Chart Heading Maintainance
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function DashboardCharts() {
  const { tasksByPriority, lastWeekCreatedAndCompletedTasks } =
    useReportContext();

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const tasksCreated = days.map((day) => {
    const found = lastWeekCreatedAndCompletedTasks?.tasks?.find(
      (item) => item.day === day,
    );
    return found ? found.created : 0;
  });
  const tasksCompleted = days.map((day) => {
    const found = lastWeekCreatedAndCompletedTasks?.tasks?.find(
      (item) => item.day === day,
    );
    return found ? found.completed : 0;
  });

  return (
    <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
      <div className="min-h-[380px] col-span-2 max-md:col-span-2 bg-surface-white border border-border-primary py-9 px-6 rounded-lg">
        <Bar
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "Completed",
                data: tasksCompleted,
                backgroundColor: ["#16A249"],
                borderRadius: 3,
                borderColor: ["#2463EB"],
              },
              {
                label: "Created",
                data: tasksCreated,
                backgroundColor: ["#2463EB"],
                borderRadius: 3,
                borderColor: ["#2463EB"],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Weekly Performance",
                padding: {
                  bottom: 30,
                },
                font: {
                  size: 18,
                  weight: "600",
                },
              },
              legend: {
                position: "bottom",
                labels: {
                  boxWidth: 12,
                  padding: 20,
                },
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                border: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
                border: {
                  display: false,
                },
                ticks: {
                  display: true,
                },
              },
            },
          }}
        />
      </div>
      <div className="min-h-[350px] col-span-1 max-md:col-span-2 bg-surface-white border border-border-primary p-6 rounded-lg">
        <Doughnut
          data={{
            labels: tasksByPriority?.tasks?.map((task) => task.tag),
            datasets: [
              {
                label: "Tasks",
                data: tasksByPriority?.tasks?.map((task) => task.count),
                backgroundColor: ["#EF4343", "#F59F0A", "#16A249"],
                borderRadius: 5,
                hoverOffset: 4,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                text: "Task Priority",
                padding: {
                  bottom: 30,
                },
                font: {
                  size: 18,
                  weight: "600",
                },
              },
              legend: {
                position: "bottom",
                labels: {
                  boxWidth: 12,
                  padding: 20,
                },
              },
            },
            cutout: "70%",
          }}
        />
      </div>
    </div>
  );
}
