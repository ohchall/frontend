import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageWrapper, Overview, TitleContainer } from "./LatestCrewList.style";
import LikeButton from "../LikeButton";

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

interface LatestCrewListProps {
  data?: Data;
  onClickCrew?: (id: number) => void;
}

const LatestCrewList = ({ data, onClickCrew }: LatestCrewListProps) => {
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
        {data?.data.crewList.map((item) => (
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
                  <p>{item.title}</p>
                  <span>15/16</span>
                </TitleContainer>

                <LikeButton />
              </div>
              <p>{item.exerciseKind} / 서울 중구</p>
            </Overview>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatestCrewList;
