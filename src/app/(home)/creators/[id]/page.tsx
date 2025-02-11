"use server";
import { fetchCreatorDetails, fetchCreators } from "@/app/actions";
import { CreatorDetails } from "@/components/Creator/CreatorDetails";
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
  return <CreatorDetails creator={creator} />;
};

export default CreatorInfo;
