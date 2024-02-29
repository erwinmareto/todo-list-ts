"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { addTask, updateTask } from "@/repositories/task";
import { TaskFormProps, TaskPayload } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TaskForm = ({ close, categoryId, prevTask }: TaskFormProps) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskPayload>({
    defaultValues: {
      title: prevTask?.title,
      status: prevTask?.status,
      priority: prevTask?.priority,
      dueTime: prevTask?.dueTime,
    },
  });

  // const onSubmit: SubmitHandler<TaskPayload> = async (data) => {
  //   try {
  //     const payload = { ...data, categoryId };
  //     const task = prevTask
  //       ? await updateTask(prevTask?.id, payload)
  //       : await addTask(payload);
  //     close();
  //     Swal.fire({
  //       title: "Success!",
  //       text: task.message,
  //       icon: "success",
  //       timer: 2000,
  //       showCloseButton: false,
  //       showConfirmButton: false,
  //       timerProgressBar: true,
  //     });
  //     router.refresh();
  //   } catch (error: any) {
  //     Swal.fire({
  //       title: "Error!",
  //       text: error.message,
  //       icon: "error",
  //       timer: 2000,
  //       showCloseButton: false,
  //       showConfirmButton: false,
  //       timerProgressBar: true,
  //     });
  //   }
  // };

  const createTaskMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Task created successfully!",
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
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Task updated successfully!",
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
    },
  });

  const onSubmit: SubmitHandler<TaskPayload> = async (data) => {
    const payload = { ...data, categoryId };
    prevTask
      ? updateTaskMutation.mutate({ ...payload, id: prevTask.id })
      : createTaskMutation.mutate(payload);
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Task name</label>
      <input
        {...register("title", { required: true })}
        id="title"
        type="text"
        placeholder="Task name"
        className="p-2 rounded-lg"
      />
      {errors.title && (
        <p className="text-xs italic text-red-500">Title is required</p>
      )}
      {/* <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        placeholder="Description"
        className="p-2 rounded-lg"
      /> */}
      <label htmlFor="status">Status</label>
      <select
        {...register("status", { required: true })}
        id="status"
        className="p-2 rounded-lg"
      >
        <option value="">Select status</option>
        <option value="PENDING">Pending</option>
        <option value="STARTED">Started</option>
        <option value="DONE">Done</option>
      </select>
      {errors.status && (
        <p className="text-xs italic text-red-500">Status is required</p>
      )}
      <label htmlFor="priority">Priority</label>
      <select
        {...register("priority", { required: true })}
        id="priority"
        className="p-2 rounded-lg"
      >
        <option value="">Select priority</option>
        <option value="URGENT">Urgent</option>
        <option value="MODERATE">Moderate</option>
        <option value="MINOR">Minor</option>
      </select>
      {errors.priority && (
        <p className="text-xs italic text-red-500">Priority is required</p>
      )}
      <label htmlFor="dealine">Deadline</label>
      <input
        {...register("dueTime", { required: true })}
        id="dealine"
        type="datetime-local"
        placeholder="Deadline"
        className="p-2 rounded-lg"
      />
      {errors.dueTime && (
        <p className="text-xs italic text-red-500">Deadline is required</p>
      )}
      <button
        type="submit"
        className="w-1/4 text-white bg-blue-500 p-2 mx-auto rounded-lg transition-all hover:bg-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
