import { Ratings } from "@/components/Rating";
import { Card, CardContent } from "@/components/ui/card";
import { parseIntWithFallback } from "@/lib/utils";
import { CreatorDetailsType } from "@/types";
import DOMPurify from "isomorphic-dompurify";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CreatorDetails = ({ creator }: { creator: CreatorDetailsType }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link href="/creators" className="flex pb-2">
        <ArrowLeft />
        Back to list of creators
      </Link>
      <Card>
        <CardContent className="flex flex-col gap-2 items-center justify-center p-10">
          <Image src={creator.image} alt={creator.name} width={200} height={200} className="rounded-full" />
          <h3 className="text-2xl my-2">{creator.name}</h3>
          <Ratings rating={parseIntWithFallback(creator.rating)} />
          <div>Games: {creator.games_count}</div>
          <div>Rating: {creator.reviews_count}</div>
          <p className="text-balance">{DOMPurify.sanitize(creator.description, { USE_PROFILES: { html: false } })}</p>
        </CardContent>
      </Card>
    </div>
  );
};
