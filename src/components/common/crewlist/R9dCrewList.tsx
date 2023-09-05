import {
  R9dCrewListBlock,
  R9dCrew,
  ImageWrapper,
  Overview,
  StyledBsPersonFill,
  TitleContainer
} from "./R9dCrewList.style";
import "swiper/css";
import Scrap from "../../scrap/Scrap";
import { useQuery } from "@tanstack/react-query";
import { getScrap } from "../../../api/CrewApi";

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

interface IData {
  data: {
    crewList: CrewList[];
    totalPages: number;
  };
}

interface IR9dCrewListProps {
  data?: IData;
  onClickCrew?: (id: number) => void;
  loggedin: boolean
}

const R9dCrewList = ({
  data,
  onClickCrew,
  loggedin
 }: IR9dCrewListProps) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");

  const { data: scrappedData } = useQuery(["scraps"], async () => {
    if (access && refresh) {
      return getScrap();
    }
    return [];
  });

  const currentScrapData = scrappedData?.find(
    (item: any) =>
      item.crewRecruitmentId === data?.data.crewList[0].crewRecruitmentId
  );

  return (
    <R9dCrewListBlock>
      {data && (
        <R9dCrew
          key={data?.data.crewList[0].crewRecruitmentId}
          onClick={() =>
            onClickCrew && onClickCrew(data?.data.crewList[0].crewRecruitmentId)
          }
        >
          <ImageWrapper>
            <img
              src={
                data?.data.crewList[0].image?.length !== 0 &&
                data?.data.crewList[0].image?.length !== undefined
                  ? data?.data.crewList[0].image[0]
                  : ""
              }
              alt=""
            />
          </ImageWrapper>

          <Overview>
            <div>
              <TitleContainer>
                <p>{data?.data.crewList[0].title.length > 13 ? data?.data.crewList[0].title.substring(0, 12) : data?.data.crewList[0].title}</p>
                
                <p>
                  <StyledBsPersonFill />
                  <span>
                    {data?.data.crewList[0].currentNumber} / {data?.data.crewList[0].totalNumber}
                  </span>
                </p>
              </TitleContainer>

              {loggedin ?
              <Scrap
                id={data?.data.crewList[0].crewRecruitmentId}
                currentScrapData={currentScrapData}
              />
              : null}
            </div>

            <p>
              {data?.data.crewList[0].exerciseKind} / {data?.data.crewList[0].location.split(' ').slice(0, 2).join(' ')}
            </p>
          </Overview>
        </R9dCrew>
      )}
    </R9dCrewListBlock>
  );
};

export default R9dCrewList;
