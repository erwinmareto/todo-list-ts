import AuthForm from "@/components/elements/Forms/Auth";
import { AuthFormProps } from "@/components/elements/Forms/Auth/type";

const AuthPage = ({ authType }: AuthFormProps) => {
  return (
    <article className="w-full max-w-lg flex flex-col gap-5 bg-slate-500 p-10 rounded-lg">
      <AuthForm authType={authType}/>
    </article>
  );
};

export default AuthPage;
