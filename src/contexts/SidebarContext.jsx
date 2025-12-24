import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarVisible,
        setIsSidebarVisible,
        logoutPopup,
        setLogoutPopup,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
