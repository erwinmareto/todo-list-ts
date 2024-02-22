"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from 'sweetalert2'
import { loginUser, registerUser } from "@/queries/auth";
import { AuthPayload, AuthFormProps } from "./type";

const AuthForm = ({ authType }: AuthFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthPayload>();
  const onSubmit: SubmitHandler<AuthPayload> = async (data) => {
    try {
        const userData = authType === "register" ? await registerUser(data) : await loginUser(data)
          Swal.fire({
            title: 'Success!',
            text: userData.message,
            icon: 'success',
            timer: 2000,
            showCloseButton: false,
            showConfirmButton: false,
            timerProgressBar: true
          })
          authType === "register" ? router.push("/auth/login") : router.push("/")
    } catch (error: any) {
        Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error',
            timer: 2000,
            showCloseButton: false,
            showConfirmButton: false,
            timerProgressBar: true
          })
      }
    
  };
  return (
    <>
      <h1 className="text-3xl">
        {authType === "register" ? "Register" : "Login"}
      </h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
          placeholder="Username"
          className="p-2 rounded-lg"
        />
        {errors.username && (
          <p className="text-xs italic text-red-500">Username is required</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          placeholder="Password"
          className="p-2 rounded-lg"
        />
        {errors.password && (
          <p className="text-xs italic text-red-500">Password is required</p>
        )}
        <button
          type="submit"
          className="w-1/4 bg-blue-500 p-2 mx-auto rounded-lg transition-all hover:bg-blue-300"
        >
          {authType}
        </button>
        <Link href={`/auth/${authType === "register" ? "login" : "register"}`}>
          <p className="underline text-center transition-all hover:text-white">
            {authType === "register" ? "Login" : "Register"}
          </p>
        </Link>
      </form>
    </>
  );
};
export default AuthForm;
