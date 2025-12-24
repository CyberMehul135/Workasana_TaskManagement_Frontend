import { createContext, useContext, useEffect, useState } from "react";
import { getTags } from "../services/tag.services";

const TagsContext = createContext();

export const useTagsContext = () => useContext(TagsContext);

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);

  const [tagsFetchLoading, setTagsFetchLoading] = useState(false);

  const [tagsError, setTagsError] = useState(null);

  const fetchTags = async () => {
    try {
      setTagsFetchLoading(true);
      setTagsError(null);

      const res = await getTags();
      setTags(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setTagsFetchLoading(false);
    }
  };

  const handleError = (err) => {
    setTagsError(
      err.response?.data?.message || err.message || "Something went wrong"
    );
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <TagsContext.Provider value={{ tags, tagsFetchLoading, tagsError }}>
      {children}
    </TagsContext.Provider>
  );
};
