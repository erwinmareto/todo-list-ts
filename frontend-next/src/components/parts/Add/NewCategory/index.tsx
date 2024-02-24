"use client";

import { useState } from "react";
import Modal from "@/components/elements/Modal";
import CategoryForm from "@/components/elements/Forms/Category";

const NewCategory = () => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <article
        onClick={changeOpen}
        className="bg-dark-500 bg-opacity-50 w-full rounded-xl p-10 shadow-xl transition-all hover:bg-dark-300 hover:bg-opacity-30"
      >
        <h1 className="text-3xl">+ Add Category</h1>
      </article>
      {open && (
        <Modal close={changeOpen} title="Add Category">
          <CategoryForm close={changeOpen} />
        </Modal>
      )}
    </>
  );
};

export default NewCategory;
