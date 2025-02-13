import { auth } from "@/auth";
import { RegisterForm } from "@/components/RegisterForm";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/account");
  }
  return <RegisterForm />;
};

export default RegisterPage;
