import { GameCard } from "@/components/Game/GameCard";
import { Game } from "@/types";

export const GameList = ({ games }: { games: Game[] }) => {
  return (
    <div className="flex flex-col p-10">
      <h3 className="text-3xl pb-10 max-md:text-center">Games</h3>
      <div className="flex flex-wrap justify-start max-md:justify-center items-center gap-10">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};
