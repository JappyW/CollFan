import { fetchGames } from "@/app/actions";
import { GameList } from "@/components/Game/GameList";

const GameListPage = async () => {
  const data = await fetchGames();

  if (!data || data.results.length === 0) {
    return <div>No games to display</div>;
  }

  return <GameList games={data.results} />;
};

export default GameListPage;
