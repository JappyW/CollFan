"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { parseIntWithFallback } from "@/lib/utils";
import { Diamond } from "@/types";
import { Check, Diamond as DiamondIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const DiamondCard = ({
  amount,
  url,
  removeBalance,
}: Diamond & { removeBalance: (price: number) => boolean }) => {
  const [animate, setAnimate] = useState(false);
  const parsedAmount = parseIntWithFallback(amount);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 250);
    }
  }, [animate]);

  return (
    <Card className="p-10 flex flex-col justify-center items-center ">
      <Image src={url} alt={`${parsedAmount} diamonds`} width={200} height={200} />

      <p className="text-lg font-semibold text-center">{parsedAmount} Diamonds</p>
      <Button
        className="mt-10 uppercase min-w-32"
        onClick={() => {
          const result = removeBalance(parsedAmount);
          if (result) {
            setAnimate(true);
          }
        }}
      >
        <div className={animate ? "hidden" : "flex justify-center items-center gap-2"}>
          Buy {parsedAmount} <DiamondIcon fill="cyan" color="black" />
        </div>
        {animate ? <Check /> : null}
      </Button>
    </Card>
  );
};
