import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageWrapper, Overview, TitleContainer } from "./LatestCrewList.style";
import Scrap from "../../scrap/Scrap";

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
                  {/* <span>{item.totalNumber}</span> */}
                </TitleContainer>

                <Scrap id={item.crewRecruitmentId} />
              </div>
              <p style={{ fontSize: "12px" }}>
                {" "}
                {item.exerciseKind}/{item.location}{" "}
              </p>
            </Overview>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatestCrewList;
