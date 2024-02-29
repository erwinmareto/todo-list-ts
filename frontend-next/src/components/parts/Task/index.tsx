"use client";

import React, { useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";
import DeleteButton from "@/components/elements/Buttons/Delete";
import EditButton from "@/components/elements/Buttons/Edit";
import Modal from "@/components/elements/Modal";
import TaskForm from "@/components/elements/Forms/Task";
import { Task } from "@/components/pages/Todos/types";
import ConfirmModal from "@/components/elements/Modal/Confirm";
import { deleteTask, updateTask } from "@/repositories/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Task = ({ task }: { task: Task }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  const changeModal = () => {
    setModal(!modal);
  };

  const changeConfirm = () => {
    setConfirm(!confirm);
  };
  const stopPropagation = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      Toast.fire({
        icon: "success",
        title: `"${task?.title}" updated successfully!`,
      });

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  const changeStatus = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { createdAt, updatedAt, ...payload } = task;
    if (event.target.checked) {
      payload.status = "DONE";
      updateTaskMutation.mutate({
        ...payload,
        status: "DONE",
      });
    } else {
      payload.status = "STARTED";
      updateTaskMutation.mutate({
        ...payload,
        status: "STARTED",
      });
    }
  };

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      close();
      Swal.fire({
        title: "Success!",
        text: "Task deleted successfully!",
        icon: "success",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  const handleDelete = async () => {
    deleteTaskMutation.mutate(task.id);
  };
  return (
    <>
      <article className="bg-light-500 bg-opacity-50 w-full rounded-full">
        {open && (
          <div className="flex justify-end p-1 gap-3 mr-16">
            <button
              onClick={changeConfirm}
              className="w-3 h-3 bg-red-500 rounded-full transition-all hover:bg-red-300"
            />
            <button
              onClick={changeModal}
              className="w-3 h-3 bg-yellow-500 rounded-full transition-all hover:bg-yellow-300"
            />
            <button
              onClick={changeOpen}
              className="w-3 h-3 bg-green-500 rounded-full transition-all hover:bg-green-300"
            />
          </div>
        )}
        <div
          onClick={changeOpen}
          className={`flex items-end justify-between w-full bg-light-blue-500 bg-opacity-80 p-10 rounded-full transition-all `}
        >
          <section
            onClick={stopPropagation}
            className="flex gap-5 items-center"
          >
            <input
              onChange={changeStatus}
              checked={task?.status === "DONE"}
              type="checkbox"
              className="w-5 h-5 rounded checked:bg-blue-600"
            />
            <div>
              <h1 className="text-3xl">{task?.title}</h1>
              <p className="text-sm">{task?.status}</p>
            </div>
          </section>

          <section onClick={stopPropagation}>
            <div className="flex justify-between">
              <EditButton open={changeModal} />
              <DeleteButton deleteTask={changeConfirm} />
            </div>
            <p className="text-md">{moment(task?.dueTime).fromNow()}</p>
          </section>
        </div>
      </article>
      {modal && (
        <Modal close={changeModal} title="Edit Task">
          <TaskForm
            close={changeModal}
            categoryId={task?.categoryId}
            prevTask={task}
          />
        </Modal>
      )}
      {confirm && (
        <ConfirmModal
          close={changeConfirm}
          handleDelete={handleDelete}
          name={task?.title}
        />
      )}
    </>
  );
};

export default Task;
