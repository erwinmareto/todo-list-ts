"use client";

import DeleteButton from "@/components/elements/Buttons/Delete";
import EditButton from "@/components/elements/Buttons/Edit";
import { useState } from "react";

const Task = () => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  const stopPropagation = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };
  return (
    <article className="bg-pink-500 w-full rounded-full">
      {open && (
        <div className="flex justify-end p-1 gap-3 mr-16">
          <button className="w-3 h-3 bg-red-500 rounded-full transition-all hover:bg-red-300" />
          <button className="w-3 h-3 bg-yellow-500 rounded-full transition-all hover:bg-yellow-300" />
          <button className="w-3 h-3 bg-green-500 rounded-full transition-all hover:bg-green-300" />
        </div>
      )}
      <div
        onClick={changeOpen}
        className={`flex items-end justify-between w-full bg-purple-500 p-10 rounded-full transition-all `}
      >
        <section onClick={stopPropagation} className="flex gap-5 items-center">
          <input
            type="checkbox"
            className="w-5 h-5 rounded checked:bg-blue-600"
          />
          <div>
            <h1 className="text-3xl">Task name</h1>
            <p className="text-sm">Task description</p>
          </div>
        </section>

        <section onClick={stopPropagation}>
          <div className="flex justify-between">
            <EditButton />
            <DeleteButton />
          </div>
          <p className="text-md">2 Days left</p>
        </section>
      </div>
    </article>
  );
};

export default Task;
