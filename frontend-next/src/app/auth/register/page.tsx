import AuthPage from "@/components/pages/Auth";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AuthPage authType="register" />
    </main>
  );
}
