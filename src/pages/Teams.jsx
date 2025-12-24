import Header from "../components/Header/Header";
import Heading1 from "../components/Headings/Heading1";
import Sidebar from "../components/Sidebar/Sidebar";
import Plus from "../assets/plus.svg?react";
import TeamForm from "../components/TeamForm/TeamForm";
import { useTeamFormContext } from "../contexts/TeamFormContext";
import { useTeamContext } from "../contexts/TeamContext";
import { useOwnersContext } from "../contexts/OwnersContext";
import TeamList from "../components/TeamList/TeamList";

export default function Teams() {
  const { setIsTeamFormVisible, teamForm, resetTeamForm } =
    useTeamFormContext();
  const { owners, ownersFetchLoading, ownersError } = useOwnersContext();
  const { create } = useTeamContext();

  const handleTeamFormSubmit = async (e) => {
    e.preventDefault();
    await create(teamForm);
    resetTeamForm();
    setIsTeamFormVisible();
  };

  return (
    <>
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Header />
        <main className="flex-1 h-screen min-h-screen overflow-y-scroll bg-surface-primary p-9 max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5">
          <Heading1
            heading="All Teams"
            subHeading="Manage your organization's teams"
            btnLabel="Add New Team"
            btnIcon={Plus}
            onBtnClick={() => setIsTeamFormVisible(true)}
          />

          <TeamList />
        </main>

        <TeamForm
          members={owners?.owners}
          handleTeamFormSubmit={handleTeamFormSubmit}
        />
      </div>
    </>
  );
}
