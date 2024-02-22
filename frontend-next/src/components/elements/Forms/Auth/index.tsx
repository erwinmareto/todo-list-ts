import Link from "next/link";
import { AuthFormProps } from "./type";

const AuthForm = ({ authType }: AuthFormProps) => {
  return (
    <>
      <h1 className="text-3xl">{authType === "register" ? "Register" : "Login" }</h1>
      <form className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="p-2 rounded-lg"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-2 rounded-lg"
        />
        <button
          type="submit"
          className="w-1/4 bg-blue-500 p-2 mx-auto rounded-lg transition-all hover:bg-blue-300"
        >
          {authType}
        </button>
        <Link href={`/auth/${authType === "register" ? "login" : "register"}`}>
          <p className="underline text-center transition-all hover:text-white">{authType === 'register' ? 'Login' : 'Register'}</p>
        </Link>
      </form>
    </>
  );
};
export default AuthForm;
