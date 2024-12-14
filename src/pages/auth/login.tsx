import { LoginForm } from "@/components/LoginForm";

const login = () => {
  return (
    <>
      <div className="flex h-dvh flex-col items-center justify-center gap-5">
        <img
          src="/app-logo.svg"
          alt="App-Logo"
        />
        <LoginForm />
      </div>
    </>
  );
};

export default login;
