import Input from "../inputs/Input";
import Button from "../Buttons/Button";
import Message from "../../assets/message.svg?react";
import User from "../../assets/user.svg?react";
import Lock from "../../assets/lock.svg?react";
import { Link } from "react-router-dom";

import { useSignupFormContext } from "../../contexts/SignupFormContext";
import { useAuthContext } from "../../contexts/AuthContext.";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupForm() {
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const { signupForm, handleSignupFormChange } = useSignupFormContext();
  const { signupDataLoading, signupDataError, signup } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(signupForm);
  };

  return (
    <form
      className="w-full h-fit max-w-md bg-surface-white border border-border-primary shadow-sm rounded-xl p-8 max-sm:py-5 max-sm:px-5 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="Full Name"
        id="name"
        name="name"
        value={signupForm.name}
        onChange={handleSignupFormChange}
        placeholder="John Doe"
        icon={User}
      />
      <Input
        type="email"
        label="Email"
        id="email"
        name="email"
        value={signupForm.email}
        onChange={handleSignupFormChange}
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
            value={signupForm.password}
            onChange={handleSignupFormChange}
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

      {signupDataError && (
        <p className="text-text-red-300">{signupDataError}</p>
      )}
      <Button
        label={signupDataLoading ? "Loading..." : "Create Account"}
        className="max-sm:mt-3 justify-center"
      />

      <p className="text-base text-text-primary text-center max-sm:mt-1 max-sm:mb-2">
        Already have an account?{" "}
        <Link to="/login" className="text-text-blue-400 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
