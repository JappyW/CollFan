"use client";
import { Balance } from "@/components/Balance";
import { DiamondCard } from "@/components/Diamonds/DiamondCard";
import { Card } from "@/components/ui/card";
import { LOCAL_STORAGE_KEYS } from "@/constants";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { Diamond } from "@/types";
import { toast } from "sonner";

export const DiamondList = ({ diamonds, email }: { diamonds: Diamond[]; email: string | undefined | null }) => {
  const [balance, setBalance] = useLocalStorageState<number>(`${email ?? ""}-${LOCAL_STORAGE_KEYS.BALANCE_AMOUNT}`, 0);
  const [diamondsAmount, setDiamondsAmount] = useLocalStorageState<number>(
    `${email ?? ""}-${LOCAL_STORAGE_KEYS.DIAMOND_AMOUNT}`,
    0
  );

  const handleRemoveBalance = (price: number): boolean => {
    if (balance - price < 0) {
      toast.error("You don't have enough balance to buy this diamond");
      return false;
    }

    setBalance(balance - price);
    setDiamondsAmount(diamondsAmount + price);
    toast.success("Diamond bought successfully");
    return true;
  };

  const handleAddBalance = (amount: number) => {
    setBalance(balance + amount);
    toast.success("Balance added successfully");
  };

  return (
    <div className="flex flex-col p-10">
      <h3 className="text-3xl pb-10">Diamonds</h3>
      <Card className="mx-auto my-4">
        <Balance addBalance={handleAddBalance} balance={balance} diamonds={diamondsAmount} />
      </Card>
      <div className="flex flex-wrap justify-center items-center gap-20">
        {diamonds.map((d) => {
          return <DiamondCard key={d.amount} amount={d.amount} url={d.url} removeBalance={handleRemoveBalance} />;
        })}
      </div>
    </div>
  );
};
