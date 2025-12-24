import { createContext, useContext, useEffect, useState } from "react";
import {
  getUser,
  loginService,
  signupService,
  updateUser,
} from "../services/auth.services";
import { useNavigate } from "react-router-dom";
import { useLoginFormContext } from "./LoginFormContext";
import { useSignupFormContext } from "./SignupFormContext";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState();
  const [signupData, setSignupData] = useState();
  const [user, setUser] = useState({});

  const [loginDataLoading, setLoginDataLoading] = useState(false);
  const [signupDataLoading, setSignupDataLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [userUpdateLoading, setUserUpdateLoading] = useState(false);

  const [loginDataError, setLoginDataError] = useState(null);
  const [signupDataError, setSignupDataError] = useState(null);
  const [userError, setUserError] = useState(null);
  const [userUpdateError, setUserUpdateError] = useState(null);

  const navigate = useNavigate();
  const { resetLoginForm } = useLoginFormContext();
  const { resetSignupForm } = useSignupFormContext();

  const login = async (data) => {
    try {
      setLoginDataLoading(true);
      setLoginDataError(null);

      const res = await loginService(data);
      setLoginData(res.data);
      const token = res.data.token;
      localStorage.setItem("adminToken", token);
      resetLoginForm();
      navigate("/");
    } catch (err) {
      localStorage.removeItem("adminToken");
      setLoginDataError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoginDataLoading(false);
    }
  };

  const signup = async (data) => {
    try {
      setSignupDataLoading(true);
      setSignupDataError(null);

      const res = await signupService(data);
      resetSignupForm();
    } catch (err) {
      setSignupDataError(
        err.response?.data?.err || err.message || "Something went wrong"
      );
    } finally {
      setSignupDataLoading(false);
    }
  };

  const fetchUserDetails = async () => {
    try {
      setUserLoading(true);
      setUserError(null);

      const res = await getUser();
      setUser(res.data);
    } catch (err) {
      setUserError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setUserLoading(false);
    }
  };

  const updateUserDetails = async (id, data) => {
    try {
      setUserUpdateLoading(true);
      setUserUpdateError(null);

      const res = await updateUser(id, data);
      setUser(res.data);
    } catch (err) {
      setUserUpdateError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setUserUpdateLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginData,
        loginDataLoading,
        loginDataError,
        login,
        signupDataLoading,
        signupDataError,
        signup,
        user,
        userLoading,
        userError,
        fetchUserDetails,
        updateUserDetails,
        userUpdateLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
