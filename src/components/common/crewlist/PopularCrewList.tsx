import { TitleContainer, PopularCrewListBlock } from "./PopularCrewList.style";

interface CrewList {
  currentNumber: number;
  crewRecruitmentId: number;
  title: string;
  content: string;
  image?: string[];
  exerciseKind: string;
}

interface Data {
  data: {
    crewList: CrewList[];
    totalPages: number;
  };
}

interface PopularCrewListProps {
  data?: Data;
  onClickCrew?: (id: number) => void;
}

const PopularCrewList: React.FC<PopularCrewListProps> = ({
  data,
  onClickCrew,
}) => {
  return (
    <PopularCrewListBlock>
      {data?.data.crewList.map((item, idx) => (
        <div
          key={item.crewRecruitmentId}
          onClick={() => onClickCrew && onClickCrew(item.crewRecruitmentId)}
        >
          <TitleContainer>
            <p>{idx + 1}</p>
            <p>{item.title}</p>
          </TitleContainer>

          <p>{item.exerciseKind} / 서울 중구</p>
        </div>
      ))}
    </PopularCrewListBlock>
  );
};

export default PopularCrewList;
