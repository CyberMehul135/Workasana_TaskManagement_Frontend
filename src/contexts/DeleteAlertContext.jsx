import { createContext, useContext, useState } from "react";

const DeleteAlertContext = createContext();

export const useDeleteAlertContext = () => useContext(DeleteAlertContext);

export const DeleteAlertProvider = ({ children }) => {
  const [isDeleteAlertVisible, setIsDeleteAlertVisible] = useState({
    _id: "",
    name: "",
    visiblity: false,
  });

  return (
    <DeleteAlertContext.Provider
      value={{ isDeleteAlertVisible, setIsDeleteAlertVisible }}
    >
      {children}
    </DeleteAlertContext.Provider>
  );
};
