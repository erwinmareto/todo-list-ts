"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Task from "@/components/parts/Task";
import NewTask from "@/components/parts/Add/NewTask";
import CategoryForm from "@/components/elements/Forms/Category";
import Modal from "@/components/elements/Modal";
import { deleteCategory } from "@/queries/category";
import { Category } from "@/components/pages/Todos/types";
import ConfirmModal from "@/components/elements/Modal/Confirm";

const CategoryCard = ({ category }: { category: Category }) => {
  const router = useRouter();
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
  }

  const handleDelete = async () => {
    try {
      const deleted = await deleteCategory(category.id);
      Swal.fire({
        title: "Success!",
        text: deleted.message,
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
    <>
      <article className="bg-purple-500 w-full rounded-xl">
        <div className="flex justify-end gap-3 px-3 m-1">
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
        <div className="bg-fuchsia-400 flex flex-col justify-center gap-5 p-10 rounded-xl">
          <section className="flex justify-between">
            <h1 className="text-3xl">{category?.title}</h1>
            <button onClick={changeOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-10 h-10 transition-all duration-300 ${
                  open && "rotate-180"
                }`}
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
              {category?.Task?.map((task) => (
                <Task key={task.id} task={task} />
              ))}

              <NewTask categoryId={category?.id} />
            </>
          )}
        </div>
      </article>
      {modal && (
        <Modal close={changeModal} title="Edit Category">
          <CategoryForm close={changeModal} prevCategory={category} />
        </Modal>
      )}
      {confirm && (
        <ConfirmModal close={changeConfirm} handleDelete={handleDelete} name={category?.title} />
      )}
    </>
  );
};

export default CategoryCard;
