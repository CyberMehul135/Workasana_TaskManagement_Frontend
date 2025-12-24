import { useTeamContext } from "../../contexts/TeamContext";
import TeamCardLoading from "../Loadings/TeamCardLoading";
import TeamCard from "../TeamCard/TeamCard";

export default function TeamList() {
  const { teams, teamsFetchLoading, teamsError } = useTeamContext();

  if (teamsFetchLoading) return <TeamCardLoading />;
  if (teamsError) return <p>Error: {teamsError}</p>;
  if (teams) {
    return (
      <div className="grid grid-cols-4 gap-6 mt-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {teams?.teams?.map((team) => (
          <TeamCard key={team._id} team={team} />
        ))}
      </div>
    );
  }
}
