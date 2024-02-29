"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";
import { addCategory, updateCategory } from "@/repositories/category";
import { CategoryFormProps, CategoryPayload } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CategoryForm = ({ close, prevCategory }: CategoryFormProps) => {
  const userId = getCookie("userId");
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryPayload>({
    defaultValues: {
      title: prevCategory?.title,
    },
  });

  const createCategoryMutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Category created successfully!",
        icon: "success",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      close();
      router.refresh();
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Category updated successfully!",
        icon: "success",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      close();
      router.refresh();
    },
  });

  const onSubmit: SubmitHandler<CategoryPayload> = async (data) => {
    const payload = { ...data, userId };
    prevCategory
      ? updateCategoryMutation.mutate({ ...payload, id: prevCategory.id })
      : createCategoryMutation.mutate(payload);
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
