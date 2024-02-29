"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";
import { addCategory, deleteCategory, updateCategory } from "@/repositories/category";
import { CategoryFormProps, CategoryPayload } from "./types";

const CategoryForm = ({ close, prevCategory }: CategoryFormProps) => {
  const userId = getCookie("userId");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryPayload>({
    defaultValues: {
      title: prevCategory?.title,
    },
  });
  const onSubmit: SubmitHandler<CategoryPayload> = async (data) => {
    try {
      const payload = { ...data, userId };
      const category = prevCategory
        ? await updateCategory(prevCategory.id, payload)
        : await addCategory(payload);
      close();

      Swal.fire({
        title: "Success!",
        text: category.message,
        icon: "success",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      router.refresh();
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Category name</label>
      <input
        {...register("title", { required: true })}
        id="title"
        type="text"
        placeholder="Category name"
        className="p-2 rounded-lg"
      />
      {errors.title && (
        <p className="text-xs italic text-red-500">Category name is required</p>
      )}
      <button
        type="submit"
        className="w-1/4 bg-blue-500 p-2 mx-auto rounded-lg transition-all hover:bg-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
