import { RegisterForm } from "@/components/RegisterForm";

const register = () => {
  return (
    <>
      <div className="flex h-dvh flex-col items-center justify-center gap-5">
        <img
          src="/app-logo.svg"
          alt="App-Logo"
        />
        <RegisterForm />
      </div>
    </>
  );
};

export default register;
