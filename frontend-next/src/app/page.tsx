import { cookies } from "next/headers";
import TodosPage from "@/components/pages/Todos";

export default async function Home() {
  const cookieJar = cookies();
  const { value: userId } = cookieJar.get("userId");

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <TodosPage userId={userId} />
    </main>
  );
}
