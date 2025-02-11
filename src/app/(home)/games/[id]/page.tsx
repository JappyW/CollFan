import { fetchGameDetails, fetchGames, fetchGameScreenshots } from "@/app/actions";
import { GameDetails } from "@/components/Game/GameDetails";
import { Game, GameDetailsType, Sreenshots } from "@/types";
import { notFound } from "next/navigation";

async function getGame(id: string): Promise<{ game: GameDetailsType; screenshots: Sreenshots[] }> {
  const game = await fetchGameDetails(id, "force-cache");
  const gameScreenshots = await fetchGameScreenshots(id);

  if (!game) notFound();
  return { game, screenshots: gameScreenshots?.results };
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
  const { game } = await getGame(id);

  return {
    title: game.name,
  };
}

const GameInfo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { game, screenshots } = await getGame(id);

  return <GameDetails game={game} screenshots={screenshots} />;
};

export default GameInfo;
