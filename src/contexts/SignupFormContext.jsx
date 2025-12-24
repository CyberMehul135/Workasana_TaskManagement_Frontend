import { createContext, useContext, useState } from "react";

const SignupFormContext = createContext();

export const useSignupFormContext = () => useContext(SignupFormContext);

export const SignupFormProvider = ({ children }) => {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignupFormChange = (e) => {
    const { value, name } = e.target;
    setSignupForm((pre) => ({ ...pre, [name]: value }));
  };

  const resetSignupForm = () => {
    setSignupForm((pre) => ({ ...pre, name: "", email: "", password: "" }));
  };

  return (
    <SignupFormContext.Provider
      value={{ signupForm, handleSignupFormChange, resetSignupForm }}
    >
      {children}
    </SignupFormContext.Provider>
  );
};
