import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ProejctForm from "../components/Project/ProjectForm";
import Heading1 from "../components/Headings/Heading1";
import Plus from "../assets/plus.svg?react";
import { useProjectFormContext } from "../contexts/ProjectFormContext";
import { useFiltersContext } from "../contexts/FiltersContext";
import { useEffect } from "react";
import DashboardStatsOverview from "../components/DashboardStats/DashboardStatsOverview";
import DashboardCharts from "../components/DashbaordCharts/DashboardCharts";

export default function Home() {
  const { setIsProjectFormVisible } = useProjectFormContext();
  const { resetFilter } = useFiltersContext();

  useEffect(() => {
    resetFilter();
  }, []);

  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Header />
      <main className="flex-1 h-screen bg-surface-primary p-8  overflow-y-scroll max-sm:mt-16 max-sm:pt-12 max-sm:px-3.5 min-h-screen">
        <Heading1
          heading="Dashboard"
          subHeading="Welcome back! Here's your overview."
          btnLabel="Add New Project"
          btnIcon={Plus}
          onBtnClick={() => setIsProjectFormVisible(true)}
          className={"mb-8"}
        />
        <DashboardStatsOverview />

        <DashboardCharts />

        <ProejctForm />
      </main>
    </div>
  );
}
