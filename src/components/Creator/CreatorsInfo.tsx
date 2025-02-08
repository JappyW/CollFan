import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Creator } from "@/types";
import Link from "next/link";

export const CreatorInfo = ({ creator }: { creator: Creator }) => {
  return (
    <Link className="flex basis-1/4 p-4 flex-1 min-h-56" href={`/creators/${creator.id}`}>
      <Card className="flex flex-1 flex-col cursor-pointer hover:-translate-y-2 hover:translate-x-2 hover:shadow-md hover:shadow-slate-800/60">
        <CardHeader
          className="flex flex-col min-h-52 rounded-t-xl"
          style={{ backgroundImage: `url(${creator.image})`, backgroundSize: "cover" }}
        />
        <CardHeader>
          <CardTitle>{creator.name}</CardTitle>
          <CardDescription>{creator.games_count}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
