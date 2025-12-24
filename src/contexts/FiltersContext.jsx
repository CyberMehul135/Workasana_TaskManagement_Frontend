import { createContext, useContext, useEffect, useState } from "react";

const FiltersContext = createContext();

export const useFiltersContext = () => useContext(FiltersContext);

export const FiltersProvider = ({ children }) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    owners: "",
    tags: "",
    project: "",
    team: "",
    status: "",
    _id: "",
    sort: "",
  });
  const [query, setQuery] = useState(null);

  const convertObjectToQuery = () => {
    const query = new URLSearchParams(filters).toString();
    setQuery(query);
  };

  const handleFilterOnChange = (e) => {
    const { value, name } = e.target;
    setFilters((pre) => ({ ...pre, [name]: value }));
  };

  const resetFilter = (e) => {
    setFilters({ owners: "", tags: "", project: "", team: "" });
  };

  useEffect(() => {
    convertObjectToQuery();
  }, [filters]);

  return (
    <FiltersContext.Provider
      value={{
        filters,
        handleFilterOnChange,
        isFiltersVisible,
        setIsFiltersVisible,
        query,
        resetFilter,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
