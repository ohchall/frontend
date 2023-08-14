import {
  ImageWrapper,
  Overview,
  TitleContainer,
  LatestCrewListSwiper,
  LatestCrewListSwiperSlide } from './LatestCrewList.style';
import { AiFillHeart } from 'react-icons/ai';
import 'swiper/css';

function LatestCrewList({
  data,
  onClickCrew
}) {
  return (
    <LatestCrewListSwiper
    slidesPerView={'auto'}
    spaceBetween={12}
    >
      {data?.data.crewList.map((item) => (
      <LatestCrewListSwiperSlide
        key={item.crewRecruitmentId}
        onClick={() => onClickCrew(item.crewRecruitmentId)}
      >
        <ImageWrapper>
          <img src='' alt='' />
        </ImageWrapper>

        <Overview>
          <div>
            <TitleContainer>
              <p>{item.title}</p>
              <span>15/16</span>
            </TitleContainer>

            <span><AiFillHeart /></span>
          </div>

          <p>{item.exercisekind} / 서울 중구</p>
        </Overview>
      </LatestCrewListSwiperSlide>
      ))}
    </LatestCrewListSwiper>
  )
}

export default LatestCrewList;
