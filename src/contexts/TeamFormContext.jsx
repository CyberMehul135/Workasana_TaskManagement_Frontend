import { createContext, useContext, useState } from "react";

const TeamFormContext = createContext();

export const useTeamFormContext = () => useContext(TeamFormContext);

export const TeamFormProvider = ({ children }) => {
  const [isTeamFormVisible, setIsTeamFormVisible] = useState(false);
  const [teamForm, setTeamForm] = useState({
    name: "",
    description: "",
    members: [],
  });

  const handleTeamFormOnChange = (e) => {
    const { value, name, checked } = e.target;
    if (name === "members" || name === "tags") {
      setTeamForm((pre) => ({
        ...pre,
        [name]: checked
          ? [...pre[name], value]
          : pre[name].filter((v) => value != v),
      }));
    } else {
      setTeamForm((pre) => ({ ...pre, [name]: value }));
    }
  };

  const resetTeamForm = (e) => {
    setTeamForm({ name: "", description: "", members: [] });
  };

  return (
    <TeamFormContext.Provider
      value={{
        isTeamFormVisible,
        setIsTeamFormVisible,
        teamForm,
        handleTeamFormOnChange,
        resetTeamForm,
      }}
    >
      {children}
    </TeamFormContext.Provider>
  );
};
