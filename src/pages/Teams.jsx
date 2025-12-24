import Header from "../components/Header/Header";
import Heading1 from "../components/Headings/Heading1";
import Sidebar from "../components/Sidebar/Sidebar";
import Plus from "../assets/plus.svg?react";
import TeamCard from "../components/TeamCard/TeamCard";
import TeamForm from "../components/TeamForm/TeamForm";
import { useTeamFormContext } from "../contexts/TeamFormContext";
import { useTeamContext } from "../contexts/TeamContext";
import { useOwnersContext } from "../contexts/OwnersContext";

export default function Teams() {
  const { setIsTeamFormVisible, teamForm, resetTeamForm } =
    useTeamFormContext();
  const { teams, teamsFetchLoading, teamsError } = useTeamContext();
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

          <div className="grid grid-cols-4 gap-6 mt-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {teams?.teams?.map((team) => (
              <TeamCard key={team._id} team={team} />
            ))}
          </div>
        </main>

        <TeamForm
          members={owners?.owners}
          handleTeamFormSubmit={handleTeamFormSubmit}
        />
      </div>
    </>
  );
}
