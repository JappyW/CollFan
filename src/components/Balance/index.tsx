"use client";

import { Button } from "@/components/ui/button";
import { MAX_DISPLAYED_BALANCE, MAX_DISPLAYED_DIAMONDS } from "@/constants";
import { Diamond, DollarSign } from "lucide-react";

export const Balance = ({
  addBalance,
  balance,
  diamonds,
}: {
  balance: number;
  diamonds: number;
  addBalance: (balance: number) => void;
}) => {
  return (
    <div className="flex gap-2 items-center justify-center p-4">
      <div className="flex gap-1">
        <DollarSign />
        {balance > MAX_DISPLAYED_BALANCE ? `${MAX_DISPLAYED_BALANCE}+` : balance}
      </div>
      <div className="flex gap-1">
        <Diamond fill="cyan" />
        {diamonds > MAX_DISPLAYED_DIAMONDS ? `${MAX_DISPLAYED_DIAMONDS}+` : diamonds}
      </div>
      <Button title="Add Diamonds" className="flex gap-1" variant="outline" onClick={() => addBalance(100)}>
        +<DollarSign />
      </Button>
    </div>
  );
};
