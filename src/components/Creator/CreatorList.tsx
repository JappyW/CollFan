import { CreatorInfo } from "@/components/Creator/CreatorsInfo";
import { Creator } from "@/types";

export const CreatorList = ({ creators }: { creators: Creator[] }) => {
  return (
    <div className="flex p-4 flex-wrap justify-center items-center">
      {creators.map((creator) => (
        <CreatorInfo creator={creator} key={creator.id} />
      ))}
    </div>
  );
};
