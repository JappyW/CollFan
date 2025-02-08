import { fetchGameDetails, fetchGames } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Game, GameDetails } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getGame(id: string): Promise<GameDetails> {
  const game = await fetchGameDetails(id, "force-cache");
  if (!game) notFound();
  return game;
}

export async function generateStaticParams() {
  const games = await fetchGames("force-cache");

  if (!games) return [];

  return games.results.map((game: Game) => ({
    id: String(game.id),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = await getGame(id);

  return {
    title: game.name,
  };
}

const GameInfo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const game = await getGame(id);

  return (
    <div className="flex h-full w-full">
      <Card className="flex flex-1 flex-col">
        <CardHeader className="flex flex-col min-h-52 rounded-t-xl" />
        <CardContent>
          <Image src={game.background_image} alt={game.name} width={500} height={800} />
        </CardContent>
        <CardHeader>
          <CardTitle>{game.name}</CardTitle>
          <CardTitle>{game.released}</CardTitle>
          <CardDescription>
            <span dangerouslySetInnerHTML={{ __html: game.description }}></span>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default GameInfo;
