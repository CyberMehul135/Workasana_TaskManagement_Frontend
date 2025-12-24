import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Button from "../components/Buttons/Button";
import TeamDetails from "../components/TeamDetails/TeamDetails";
import { MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useTeamContext } from "../contexts/TeamContext";
import { useEffect } from "react";
import TeamUpdateForm from "../components/TeamForm/TeamUpdateForm";
import { useOwnersContext } from "../contexts/OwnersContext";
import { useTeamUpdateFormContext } from "../contexts/TeamUpdateFormContext";

export default function Team() {
  const navigate = useNavigate();
  const { teamId } = useParams();
  const {
    teamDetails,
    fetchTeamById,
    teamDetailsFetchingLoading,
    teamsError,
    update,
    teamCreateLoading,
  } = useTeamContext();
  const { owners, ownersFetchLoading, ownersError } = useOwnersContext();
  const {
    setIsTeamUpdateFormVisible,
    teamUpdateForm,
    resetTeamUpdateForm,
    setTeamUpdateForm,
  } = useTeamUpdateFormContext();

  const handleTeamUpdateFormSubmit = async (e) => {
    e.preventDefault();
    await update(teamId, teamUpdateForm);
    resetTeamUpdateForm();
    setIsTeamUpdateFormVisible(false);
  };

  const handleOnClickDeleteMembers = async (members, memberId) => {
    const updatedMembers = members
      .map((member) => member._id)
      .filter((id) => id !== memberId);

    await update(teamId, { members: updatedMembers });
  };

  useEffect(() => {
    fetchTeamById(teamId);
  }, [teamId]);

  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Header />
      <main className="flex-1 h-screen min-h-screen overflow-y-scroll bg-surface-primary p-9 max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5">
        <Button
          label="Back"
          icon={MoveLeft}
          className="bg-transparent text-text-primary! hover:bg-transparent hover:text-text-black-400! max-w-[150px] p-0! mb-6 max-sm:hidden"
          onClick={() => navigate(-1)}
        />

        <TeamDetails
          data={teamDetails?.team}
          loading={teamDetailsFetchingLoading}
          error={teamsError}
          onClickAddMembers={() => setIsTeamUpdateFormVisible(true)}
          onClickDeleteMembers={handleOnClickDeleteMembers}
        />
        <TeamUpdateForm
          members={owners?.owners}
          handleTeamUpdateFormSubmit={handleTeamUpdateFormSubmit}
        />
      </main>
    </div>
  );
}
