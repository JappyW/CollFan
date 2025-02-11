import { Ratings } from "@/components/Rating";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { parseIntWithFallback, shortDate } from "@/lib/utils";
import { Game } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const GameCard = ({ game }: { game: Game }) => {
  return (
    <Link href={`/games/${game.id}`} draggable="false">
      <div className="min-h-56 hover:shadow-md hover:shadow-slate-800/60 hover:bg-foreground/10 rounded-xl cursor-pointer hover_scale-image">
        <Card className="overflow-clip max-w-72 max-h-72 ">
          <Image
            src={game.background_image}
            alt={game.name}
            width={400}
            height={400}
            className="min-h-56"
            draggable="false"
          />
        </Card>

        <CardHeader className="bg-transparent w-full p-2">
          <CardTitle>{game.name}</CardTitle>

          <CardDescription className="">
            <Ratings rating={parseIntWithFallback(game.rating)} size={12} />
            <div>Released: {shortDate(game.released)}</div>
          </CardDescription>
        </CardHeader>
      </div>
    </Link>
  );
};
