import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageWrapper, Overview, TitleContainer } from "./LatestCrewList.style";
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

interface Data {
  data: {
    crewList: CrewList[];
    totalPages: number;
  };
}

interface LatestCrewListProps {
  data?: Data;
  onClickCrew?: (id: number) => void;
}

const LatestCrewList = ({ data, onClickCrew }: LatestCrewListProps) => {
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
      const isScrapped = scrappedData?.some(
        (scrapItem: any) =>
          scrapItem.crewRecruitmentId === resultItem.crewRecruitmentId
      );

      return { ...resultItem, scrapped: isScrapped };
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
                  {/* <span>{item.totalNumber}</span> */}
                </TitleContainer>

                <Scrap id={item.crewRecruitmentId} currentScrapData={item} />
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
