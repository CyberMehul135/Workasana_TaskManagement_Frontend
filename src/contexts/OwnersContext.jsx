import { createContext, useContext, useEffect, useState } from "react";
import { getOwners } from "../services/owner.services";

const OwnersContext = createContext();

export const useOwnersContext = () => useContext(OwnersContext);

export const OwnersProvider = ({ children }) => {
  const [owners, setOwners] = useState([]);

  const [ownersFetchLoading, setOwnersFetchLoading] = useState([]);

  const [ownersError, setOwnersError] = useState(null);

  const fetchOwners = async () => {
    try {
      setOwnersFetchLoading(false);
      setOwnersError(null);

      const res = await getOwners();
      setOwners(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setOwnersFetchLoading(false);
    }
  };

  const handleError = (err) => {
    setOwnersError(
      err.response?.data?.message || err.message || "Something went wrong"
    );
  };

  useEffect(() => {
    fetchOwners();
  }, []);

  return (
    <OwnersContext.Provider value={{ owners, ownersFetchLoading, ownersError }}>
      {children}
    </OwnersContext.Provider>
  );
};
