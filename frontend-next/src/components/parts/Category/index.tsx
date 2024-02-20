"use client";

import { useState } from "react";
import Task from "../Task";
import NewTask from "../Add/NewTask";

const CatgeoryCard = () => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  return (
    <article className="bg-purple-500 w-full rounded-xl">
      <div className="flex justify-end gap-3 px-3 m-1">
        <button className="w-3 h-3 bg-red-500 rounded-full transition-all hover:bg-red-300" />
        <button className="w-3 h-3 bg-yellow-500 rounded-full transition-all hover:bg-yellow-300" />
        <button className="w-3 h-3 bg-green-500 rounded-full transition-all hover:bg-green-300" />
      </div>
      <div className="bg-fuchsia-400 flex flex-col justify-center gap-5 p-10 rounded-xl">
        <section className="flex justify-between">
          <h1 className="text-3xl">Todos</h1>
          <button onClick={changeOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-10 h-10 transition-all duration-300 ${open && "rotate-180"}`}
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
        {open && (
          <>
            <Task />
            <Task />
            <Task />
          </>
        )}
        <NewTask />
      </div>
    </article>
  );
};

export default CatgeoryCard;
