"use client";

import TaskForm from "@/components/elements/Forms/Task";
import Modal from "@/components/elements/Modal";
import { useState } from "react";

const NewTask = () => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <article
        onClick={changeOpen}
        className="flex bg-slate-500 w-full p-10 rounded-full transition-all hover:bg-slate-300"
      >
        <h1 className="text-3xl">+ Add Task</h1>
      </article>
      {open && (
        <Modal close={changeOpen} title="Add Task">
          <TaskForm />
        </Modal>
      )}
    </>
  );
};

export default NewTask;
