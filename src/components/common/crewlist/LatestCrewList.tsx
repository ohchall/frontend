import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  ImageWrapper,
  Overview,
  StyledBsPersonFill,
  TitleContainer } from "./LatestCrewList.style";
import Scrap from "../../scrap/Scrap";
import { getScrap } from "../../../api/CrewApi";
import { useQuery } from "@tanstack/react-query";

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

interface ILatestCrewListProps {
  data?: IData;
  onClickCrew?: (id: number) => void;
  loggedin: boolean
}

const LatestCrewList = ({
  data,
  onClickCrew,
  loggedin
 }: ILatestCrewListProps) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");

  const { data: scrappedData } = useQuery(["scraps"], async () => {
    if (access && refresh) {
      return getScrap();
    }
    return [];
  });

  const updatedSearchResultsWithScrappedInfo = data?.data.crewList.map(
    (resultItem) => {
      if (loggedin) {
        const isScrapped = scrappedData?.some(
          (scrapItem: any) =>
            scrapItem.crewRecruitmentId === resultItem.crewRecruitmentId
        );

        return { ...resultItem, scrapped: isScrapped };
      } else {
        return resultItem;
      }
    }
  );

  const swiperStyle = {
    width: "100%",
  };

  const swiperSlideStyle = {
    width: "285px",
    height: "329px",
    cursor: "pointer",
  };

  return (
    <>
      <Swiper style={swiperStyle} slidesPerView={"auto"} spaceBetween={12}>
        {updatedSearchResultsWithScrappedInfo?.map((item) => (
          <SwiperSlide
            style={swiperSlideStyle}
            key={item.crewRecruitmentId}
            onClick={() => onClickCrew && onClickCrew(item.crewRecruitmentId)}
          >
            <ImageWrapper>
              <img
                src={
                  item.image?.length !== 0 && item.image?.length !== undefined
                    ? item.image[0]
                    : ""
                }
                alt=""
              />
            </ImageWrapper>

            <Overview>
              <div>
                <TitleContainer>
                  <p>{item.title.length > 13 ? item.title.substring(0, 12) : item.title}</p>
                  
                  <p>
                    <StyledBsPersonFill />
                    <span>
                      {item.currentNumber} / {item.totalNumber}
                    </span>
                  </p>
                </TitleContainer>

                {loggedin ?
                <Scrap
                  id={item.crewRecruitmentId}
                  currentScrapData={item}
                />
                : null}
              </div>
              <p style={{ fontSize: "12px" }}>
                {" "}
                {item.exerciseKind} / {item.location.split(' ').slice(0, 2).join(' ')}{" "}
              </p>
            </Overview>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatestCrewList;
