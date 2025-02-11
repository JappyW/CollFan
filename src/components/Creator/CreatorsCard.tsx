import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Creator } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const CreatorCard = ({ creator }: { creator: Creator }) => {
  return (
    <Link href={`/creators/${creator.id}`} draggable="false">
      <div className="min-h-56 hover:shadow-md hover:shadow-slate-800/60 hover:bg-foreground/10 rounded-xl cursor-pointer hover_scale-image">
        <Card className="overflow-clip max-w-72 h-72">
          <Image
            src={creator.image}
            alt={creator.name}
            width={400}
            height={400}
            className="min-h-56"
            draggable="false"
          />
        </Card>

        <CardHeader className="bg-transparent w-full p-2">
          <CardTitle className="">{creator.name}</CardTitle>
        </CardHeader>
      </div>
    </Link>
  );
};
