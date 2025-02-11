import { CreatorCard } from "@/components/Creator/CreatorsCard";
import { Creator } from "@/types";

export const CreatorList = ({ creators }: { creators: Creator[] }) => {
  return (
    <div className="flex flex-col p-10">
      <h3 className="text-3xl pb-10 max-md:text-center">Creators</h3>
      <div className="flex flex-wrap justify-start max-md:justify-center items-center gap-10">
        {creators.map((creator) => (
          <CreatorCard creator={creator} key={creator.id} />
        ))}
      </div>
    </div>
  );
};
