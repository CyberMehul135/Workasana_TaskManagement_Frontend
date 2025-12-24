import { createContext, useContext, useState } from "react";

const LoginFormContext = createContext();

export const useLoginFormContext = () => useContext(LoginFormContext);

export const LoginFormProvider = ({ children }) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleLoginFormChange = (e) => {
    const { value, name } = e.target;
    setLoginForm((pre) => ({ ...pre, [name]: value }));
  };

  const resetLoginForm = () => {
    setLoginForm({ email: "", password: "" });
  };

  return (
    <LoginFormContext.Provider
      value={{ loginForm, handleLoginFormChange, resetLoginForm }}
    >
      {children}
    </LoginFormContext.Provider>
  );
};
