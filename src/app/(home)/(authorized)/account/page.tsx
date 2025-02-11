import { auth } from "@/auth";
import Logout from "@/components/Logout";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import { redirect } from "next/navigation";

const AccountPage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Card className="flex flex-col items-center p-10 gap-4">
        {session?.user?.name ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-3xl text-center">
              Welcome, <p>{session?.user?.name}</p>
            </div>
            {session?.user?.image ? (
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={72}
                height={72}
                className="rounded-full"
              />
            ) : null}
          </div>
        ) : (
          <h2 className="text-3xl">Welcome, {session?.user?.email}</h2>
        )}
        <Logout />
      </Card>
    </div>
  );
};

export default AccountPage;
