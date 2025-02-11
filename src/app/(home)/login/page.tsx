import { auth } from "@/auth";
import { LoginForm } from "@/components/LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/account");
  }
  return <LoginForm />;
};

export default LoginPage;
