import { auth } from "@/auth";
import { DiamondList } from "@/components/Diamonds/DiamondList";
import { defaultDiamonValues } from "@/constants";

const Diamonds = async () => {
  const session = await auth();
  return <DiamondList diamonds={defaultDiamonValues} email={session?.user?.email} />;
};

export default Diamonds;
