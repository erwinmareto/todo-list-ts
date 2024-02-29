"use client";

import NewCategory from "@/components/parts/Add/NewCategory";
import CategoryCard from "@/components/parts/Category";
import { Category } from "./types";
import { useTask } from "@/queries/task";

const TodosPage = ({ userId }: { userId: number }) => {
  const { data: tasks } = useTask(userId);

  return (
    <section className="flex flex-col gap-5 w-full">
      {tasks?.data.map((category: Category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
      <NewCategory />
    </section>
  );
};

export default TodosPage;
