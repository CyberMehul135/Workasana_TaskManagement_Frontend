import { createContext, useContext, useState } from "react";

const TeamUpdateFormContext = createContext();

export const useTeamUpdateFormContext = () => useContext(TeamUpdateFormContext);

export const TeamUpdateFormProvider = ({ children }) => {
  const [isTeamUpdateFormVisible, setIsTeamUpdateFormVisible] = useState(false);
  const [teamUpdateForm, setTeamUpdateForm] = useState({
    members: [],
  });

  const handleTeamUpdateFormOnChange = (e) => {
    const { value, name, checked } = e.target;
    setTeamUpdateForm((pre) => ({
      ...pre,
      [name]: checked
        ? [...pre[name], value]
        : pre[name].filter((v) => value != v),
    }));
  };

  const resetTeamUpdateForm = () => {
    setTeamUpdateForm({ members: [] });
  };

  return (
    <TeamUpdateFormContext.Provider
      value={{
        isTeamUpdateFormVisible,
        setIsTeamUpdateFormVisible,
        teamUpdateForm,
        setTeamUpdateForm,
        handleTeamUpdateFormOnChange,
        resetTeamUpdateForm,
      }}
    >
      {children}
    </TeamUpdateFormContext.Provider>
  );
};
