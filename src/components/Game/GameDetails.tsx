import { Ratings } from "@/components/Rating";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { parseIntWithFallback, pluralize, shortDate } from "@/lib/utils";
import { GameDetailsType, Sreenshots } from "@/types";
import DOMPurify from "isomorphic-dompurify";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const GameDetails = ({ game, screenshots }: { game: GameDetailsType; screenshots: Sreenshots[] }) => {
  return (
    <div className="max-w-5xl mx-auto w-full p-4">
      <Link href="/games" className="flex pb-2">
        <ArrowLeft />
        Back to list of games
      </Link>
      <Card className="flex flex-col p-4">
        <h2 className="text-4xl">{game.name}</h2>
        <div className="flex gap-4 flex-wrap mt-2">
          <div className="flex flex-col md:w-[55%] max-md:order-2">
            <Carousel opts={{ loop: true }} className="flex max-md:order-3 max-md:mt-2">
              <CarouselContent className="h-full">
                {screenshots.map((screenshot) => (
                  <CarouselItem key={screenshot.id}>
                    <Image
                      className="w-full min-h-[360px]"
                      src={screenshot.image}
                      alt={String(screenshot.id)}
                      width={640}
                      height={360}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex flex-col gap-2 mt-4 max-md:order-2">
              <div className="flex gap-4 text-sm">
                <span className="opacity-50 min-w-24 uppercase">Rating: </span>
                <Ratings rating={parseIntWithFallback(game.rating)} />
              </div>
              <div className="flex gap-4 text-sm">
                <span className="opacity-50 min-w-24 uppercase">Released: </span>
                <span>{shortDate(game.released)}</span>
              </div>

              <div className="flex gap-4 mt-2 text-sm">
                <span className="opacity-50 min-w-24 uppercase">Developer: </span>
                <span>{game.developers[0].name}</span>
              </div>

              <div className="flex gap-4 text-sm">
                <span className="opacity-50 min-w-24 uppercase">{pluralize("Publisher", game.publishers.length)}:</span>
                {game.publishers.slice(0, 2).map((publisher) => (
                  <span key={publisher.id}>{publisher.name}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 text-sm">
                <div className="opacity-50 min-w-24 uppercase">Platforms:</div>
                {game.platforms.map((platform) => (
                  <div key={platform.platform.id}>{platform.platform.name}</div>
                ))}
              </div>
              <div className="flex gap-1 text-sm">
                {game.genres.map((genre) => (
                  <Badge className="hover:bg-secondary border-2" variant="outline" key={genre.id}>
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-[40%] flex flex-col gap-2 max-md:order-1">
            <Image
              className="w-full max-h-[220px]"
              src={game.background_image}
              alt={String(game.id)}
              width={220}
              height={220}
            />
            <p className="flex grow text-ellipsis whitespace-pre-wrap text-sm overflow-hidden">
              {DOMPurify.sanitize(game.description, { USE_PROFILES: { html: false } })}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
