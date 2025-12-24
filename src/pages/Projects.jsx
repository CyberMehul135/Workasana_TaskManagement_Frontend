import Header from "../components/Header/Header";
import Heading1 from "../components/Headings/Heading1";
import ProejctForm from "../components/Project/ProjectForm";
import ProjectList from "../components/Project/ProjectList";
import Sidebar from "../components/Sidebar/Sidebar";
import Plus from "../assets/plus.svg?react";
import { useProjectFormContext } from "../contexts/ProjectFormContext";
import { useProjectContext } from "../contexts/ProjectContext";
import DeleteAlert from "../components/Alerts/DeleteAlert";
import { useDeleteAlertContext } from "../contexts/DeleteAlertContext";

export default function Projects() {
  const { setIsProjectFormVisible } = useProjectFormContext();
  const {
    projects,
    projectsLoading,
    projectsError,
    fetchProjects,
    remove,
    projectDeleteLoading,
    projectDeleteError,
  } = useProjectContext();
  const { isDeleteAlertVisible, setIsDeleteAlertVisible } =
    useDeleteAlertContext();

  return (
    <>
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Header />
        <main className="flex-1 h-screen min-h-screen overflow-y-scroll bg-surface-primary p-8 max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5">
          <Heading1
            heading="Projects"
            subHeading="Welcome back! Here's your overview."
            btnLabel="Add New Project"
            btnIcon={Plus}
            onBtnClick={() => setIsProjectFormVisible(true)}
          />
          <ProjectList
            data={projects?.projects}
            loading={projectsLoading}
            error={projectsError}
          />
          <ProejctForm />
          <DeleteAlert
            isVisible={isDeleteAlertVisible.visible}
            name={isDeleteAlertVisible.name}
            onClickCancel={() => setIsDeleteAlertVisible({ visible: false })}
            onClickDelete={async () => {
              await remove(isDeleteAlertVisible._id);
              setIsDeleteAlertVisible({ visible: false });
            }}
          />
        </main>
      </div>
    </>
  );
}
