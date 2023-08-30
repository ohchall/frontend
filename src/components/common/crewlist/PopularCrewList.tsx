import { TitleContainer, PopularCrewListBlock } from './PopularCrewList.style';

interface CrewList {
  content: string;
  crewName: string;
  crewRecruitmentId: number;
  currentNumber: number;
  exerciseDate: string;
  exerciseKind: string;
  image?: string[];
  location: string;
  postDate: number[];
  title: string;
  totalNumber: number;
  usersLocation: string;
  page: number;
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
            <p>{item.title.length > 13 ? item.title.substring(0, 12) : item.title}</p>
          </TitleContainer>

          <p style={{ fontSize: '12px' }}>
            {/* {item.exerciseKind}/ */}
            {item.location.split(' ').slice(0, 2).join(' ')}
          </p>
        </div>
      ))}
    </PopularCrewListBlock>
  );
};

export default PopularCrewList;
