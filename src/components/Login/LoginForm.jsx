import Input from "../inputs/Input";
import Message from "../../assets/message.svg?react";
import Lock from "../../assets/lock.svg?react";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useLoginFormContext } from "../../contexts/LoginFormContext";
import { useAuthContext } from "../../contexts/AuthContext.";
import { useTaskContext } from "../../contexts/TaskContext";
import { useProjectContext } from "../../contexts/ProjectContext";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const { loginForm, handleLoginFormChange } = useLoginFormContext();
  const { loginDataLoading, loginDataError, login, fetchUserDetails } =
    useAuthContext();
  const { fetchTask } = useTaskContext();
  const { fetchProjects } = useProjectContext();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    await login(loginForm);
    fetchUserDetails();
    fetchTask();
    fetchProjects();
  };

  return (
    <form
      className="w-full h-fit max-w-md bg-surface-white border border-border-primary shadow-sm rounded-xl p-8 max-sm:py-5 max-sm:px-5 flex flex-col gap-3"
      onSubmit={handleLoginFormSubmit}
    >
      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        value={loginForm.email}
        onChange={handleLoginFormChange}
        placeholder="name@company.com"
        icon={Message}
      />

      <div className="mt-2">
        <label
          htmlFor="password"
          className="text-sm text-text-black-100 font-medium tracking-wider"
        >
          Password
        </label>
        <div className="w-full h-10 py-2 px-3 mt-2 flex items-center gap-2 bg-surface-primary border border-border-primary rounded-lg focus-within:outline-2 focus-within:outline-text-blue-400 focus-within:outline-offset-2">
          <Lock />
          <input
            className="w-full border-none outline-none text-[15px] text-text-black-400"
            type={isPasswordHide ? "password" : "text"}
            id="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginFormChange}
            placeholder="••••••••"
            required
          />
          {isPasswordHide ? (
            <EyeOff
              className="text-text-primary cursor-pointer"
              onClick={() => setIsPasswordHide(false)}
            />
          ) : (
            <Eye
              className="text-text-primary cursor-pointer"
              onClick={() => setIsPasswordHide(true)}
            />
          )}
        </div>
      </div>

      {loginDataError && <p className="text-text-red-300">{loginDataError}</p>}
      <Button
        label={loginDataLoading ? "Loading..." : "Sign In"}
        className="max-sm:mt-3 justify-center"
      />

      <p className="text-base text-text-primary text-center max-sm:mt-1 max-sm:mb-2">
        Don't have an account?{" "}
        <Link to="/signup" className="text-text-blue-400 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
