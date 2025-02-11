"use server";
import { fetchCreators } from "@/app/actions";
import { CreatorList } from "@/components/Creator/CreatorList";

const CreatorListPage = async () => {
  const data = await fetchCreators();

  if (!data || data.results.length === 0) {
    return <div>No creators to display</div>;
  }

  return <CreatorList creators={data.results} />;
};

export default CreatorListPage;
