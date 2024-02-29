"use client";
// HEX: #42a1e3, RGB: (66, 161, 227)
// HEX: #78dcfb, RGB: (120, 220, 251)
// HEX: #3c7484, RGB: (60, 116, 132)
// HEX: #6c8c94, RGB: (108, 140, 148)
// HEX: #becba8, RGB: (190, 203, 168)
// HEX: #242c34, RGB: (36, 44, 52)

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { setCookie } from "cookies-next";
import Swal from "sweetalert2";
import { loginUser, registerUser } from "@/repositories/auth";
import { AuthPayload, AuthFormProps } from "./types";
import { useMutation } from "@tanstack/react-query";

const AuthForm = ({ authType }: AuthFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthPayload>();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ data }) => {
      Swal.fire({
        title: "Success!",
        text: "User logged in successfully!",
        icon: "success",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      setCookie("token", data.accessToken);
      setCookie("userId", data.id);
      router.push("/");
    },
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "User registered successfully!",
        icon: "success",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      router.push("/auth/login");
    },
  });

  const onSubmit: SubmitHandler<AuthPayload> = async (data) => {
    authType === "register"
      ? registerMutation.mutate(data)
      : loginMutation.mutate(data);
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
