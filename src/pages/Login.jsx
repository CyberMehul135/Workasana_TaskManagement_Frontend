import Logo from "../assets/logo.svg?react";
import LoginForm from "../components/Login/LoginForm";
import LoginHeader from "../components/Login/LoginHeader";

export default function Login() {
  return (
    <>
      <main className="w-full h-screen p-4 bg-surface-primary">
        <div className="w-full h-full max-w-[1600px]">
          <div className="h-full flex flex-col items-center justify-center">
            <LoginHeader
              heading="Welcome to Worksana"
              subHeading="Sign in to manage your tasks"
              icon={Logo}
            />
            <LoginForm />
          </div>
        </div>
      </main>
    </>
  );
}
