import NewCategory from "@/components/parts/Add/NewCategory";
import CategoryCard from "@/components/parts/Category";
import { Category } from "./types";

const TodosPage = ({ categories }: { categories: Category[] }) => {
  return (
    <section className="flex flex-col gap-5 w-full">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
      <NewCategory />
    </section>
  );
};

export default TodosPage;
