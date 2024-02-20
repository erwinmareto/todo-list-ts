import NewCategory from "@/components/parts/Add/NewCategory";
import CatgeoryCard from "@/components/parts/Category";

const TodosPage = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <CatgeoryCard />
      <NewCategory />
    </section>
  );
};

export default TodosPage;
