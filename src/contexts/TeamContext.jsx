import { createContext, useContext, useEffect, useState } from "react";
import {
  createTeam,
  deleteTeam,
  getTeamById,
  getTeams,
  updateTeam,
} from "../services/team.services";

const TeamContext = createContext();

export const useTeamContext = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [teamDetails, setTeamDetails] = useState({});

  const [teamsFetchLoading, setTeamsFetchLoading] = useState(false);
  const [teamDetailsFetchingLoading, setTeamDetailsFetchingLoading] = useState(
    {}
  );
  const [teamCreateLoading, setTeamCreateLoading] = useState(false);
  const [teamUpdateLoading, setTeamUpdateLoading] = useState(false);
  const [teamDeleteLoading, setTeamDeleteLoading] = useState(false);

  const [teamsError, setTeamsError] = useState(null);

  const fetchTeams = async () => {
    try {
      setTeamsFetchLoading(true);
      setTeamsError(null);

      const res = await getTeams();
      setTeams(res.data);
    } catch (err) {
      hanndleError(err);
    } finally {
      setTeamsFetchLoading(false);
    }
  };

  const fetchTeamById = async (id) => {
    try {
      setTeamDetailsFetchingLoading(true);
      setTeamsError(null);

      const res = await getTeamById(id);
      setTeamDetails(res.data);
    } catch (err) {
      hanndleError(err);
    } finally {
      setTeamDetailsFetchingLoading(false);
    }
  };

  const create = async (team) => {
    try {
      setTeamCreateLoading(true);
      setTeamsError(null);

      await createTeam(team);
      await fetchTeams();
    } catch (err) {
      hanndleError(err);
    } finally {
      setTeamCreateLoading(false);
    }
  };

  const update = async (id, team) => {
    try {
      setTeamUpdateLoading(true);
      setTeamsError(null);

      await updateTeam(id, team);
      await fetchTeams();
      await fetchTeamById(id);
    } catch (err) {
      hanndleError(err);
    } finally {
      setTeamUpdateLoading(false);
    }
  };

  const remove = async (id) => {
    try {
      setTeamDeleteLoading(true);
      setTeamsError(null);

      await deleteTeam(id);
      await fetchTeamById(id);
      await fetchTeams();
    } catch (err) {
      hanndleError(err);
    } finally {
      setTeamDeleteLoading(false);
    }
  };

  const hanndleError = (err) => {
    setTeamsError(
      err.response?.data?.message || err.message || "Something went wrong"
    );
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <TeamContext.Provider
      value={{
        teams,
        teamsFetchLoading,
        teamsError,
        create,
        teamCreateLoading,
        update,
        teamUpdateLoading,
        remove,
        teamDetails,
        teamDetailsFetchingLoading,
        fetchTeamById,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
