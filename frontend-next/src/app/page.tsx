import { cookies } from "next/headers";
import TodosPage from "@/components/pages/Todos";
import { getCategoriesByUserId } from "@/repositories/category";

export default async function Home() {
  const cookieJar = cookies();
  const userId = cookieJar.get("userId");

  const { data } = await getCategoriesByUserId(userId.value);
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <TodosPage categories={data} />
    </main>
  );
}
