import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext.";

const UserUpdateFormContext = createContext();

export const useUserUpdateForm = () => useContext(UserUpdateFormContext);

export const UserUpdateFormProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [userUpdateForm, setUserUpdateForm] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleUserUpdateForm = (e) => {
    const { name, value } = e.target;
    setUserUpdateForm((pre) => ({ ...pre, [name]: value }));
  };

  const setInitialUserData = () => {
    setUserUpdateForm((pre) => ({
      ...pre,
      id: user?.user?._id || "",
      name: user?.user?.name || "",
      email: user?.user?.email || "",
    }));
  };

  useEffect(() => {
    setInitialUserData();
  }, [user]);

  return (
    <UserUpdateFormContext.Provider
      value={{ userUpdateForm, handleUserUpdateForm }}
    >
      {children}
    </UserUpdateFormContext.Provider>
  );
};
