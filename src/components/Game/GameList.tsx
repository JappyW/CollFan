import { GameInfo } from "@/components/Game/GameInfo";
import { Game } from "@/types";

export const GameList = ({ games }: { games: Game[] }) => {
  return (
    <div className="flex p-4 flex-wrap justify-center items-center">
      {games.map((game) => (
        <GameInfo game={game} key={game.id} />
      ))}
    </div>
  );
};
