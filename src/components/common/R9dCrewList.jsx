import {
  ImageWrapper,
  Overview,
  TitleContainer,
  R9dCrewListSwiper,
  R9dCrewListSwiperSlide } from './R9dCrewList.style';
import { AiFillHeart } from 'react-icons/ai';
import 'swiper/css';

function R9dCrewList({
  data,
  onClickCrew
}) {
  return (
    <R9dCrewListSwiper
      slidesPerView={'auto'}
      spaceBetween={12}
    >
      {data?.data.map((item) => (
      <R9dCrewListSwiperSlide
        key={item.id}
        onClick={() => onClickCrew(item.id)}
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
      </R9dCrewListSwiperSlide>
      ))}
    </R9dCrewListSwiper>
  )
}

export default R9dCrewList;
