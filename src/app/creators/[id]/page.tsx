"use server";
import { fetchCreatorDetails, fetchCreators } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getCreator(id: string) {
  const creator = await fetchCreatorDetails(id, "force-cache");
  if (!creator) notFound();
  return creator;
}

export async function generateStaticParams() {
  const creators = await fetchCreators("force-cache");

  if (!creators) return [];

  return creators.results.map((creator) => ({
    id: String(creator.id),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const creator = await getCreator(id);

  return {
    title: creator.name,
  };
}

const CreatorInfo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const creator = await getCreator(id);

  return (
    <div className="flex h-full w-full">
      <Card className="flex flex-1 flex-col">
        <CardHeader className="flex flex-col min-h-52 rounded-t-xl" />
        <CardContent>
          <Image src={creator.image} alt={creator.name} width={500} height={800} />
        </CardContent>
        <CardHeader>
          <CardTitle>{creator.name}</CardTitle>
          <CardTitle>{creator.games_count}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CreatorInfo;
