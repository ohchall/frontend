import {
  ImageWrapper,
  Overview,
  TitleContainer,
  LatestCrewListSwiper,
  LatestCrewListSwiperSlide } from './LatestCrewList.style';
import "swiper/css";
import LikeButton from "../LikeButton";

function LatestCrewList({ data, onClickCrew }) {
  return (
    <LatestCrewListSwiper slidesPerView={"auto"} spaceBetween={12}>
      {/* {data?.data.map((item) => ( */}
      {data?.data.crewList.map((item) => (
        <LatestCrewListSwiperSlide
          key={item.crewRecruitmentId}
          onClick={() => onClickCrew(item.crewRecruitmentId)}
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
            <p>{item.exercisekind} / 서울 중구</p>
          </Overview>
        </LatestCrewListSwiperSlide>
      ))}
    </LatestCrewListSwiper>
  );
}

export default LatestCrewList;
