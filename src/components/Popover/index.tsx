"use client";

import { Popover as PopoverComponent, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import { ReactNode, useState } from "react";

export const Popover: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <PopoverComponent open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Menu size={36} onClick={() => setOpen(true)} />
      </PopoverTrigger>
      <PopoverContent className="w-full" onClick={() => setOpen(false)} onFocusOutside={() => setOpen(false)}>
        <ul className="flex flex-col items-center justify-end w-full bg-primary-foreground p-4 rounded">{children}</ul>
      </PopoverContent>
    </PopoverComponent>
  );
};
