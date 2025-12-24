import Logo from "../assets/logo.svg?react";
import LoginHeader from "../components/Login/LoginHeader";
import SignupForm from "../components/Signup/SignupForm";

export default function Signup() {
  return (
    <>
      <main className="w-full h-screen p-4 bg-surface-primary">
        <div className="w-full h-full max-w-[1600px]">
          <div className="h-full flex flex-col items-center justify-center">
            <LoginHeader
              heading="Create your account"
              subHeading="Start managing tasks with Workasana"
              icon={Logo}
            />
            <SignupForm />
          </div>
        </div>
      </main>
    </>
  );
}
