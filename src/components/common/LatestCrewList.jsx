import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  ImageWrapper,
  Overview,
  TitleContainer } from './LatestCrewList.style';
import LikeButton from '../LikeButton';

function LatestCrewList({ data, onClickCrew }) {

  const swiperStyle = {
    width: '100%'
  };

  const swiperSlideStyle = {
    width: '285px',
    height: '329px',
    cursor: 'pointer'
  };

  return (
    <>
      <Swiper
        style={swiperStyle}
        slidesPerView={'auto'}
        spaceBetween={12}
      >
        {data?.data.crewList.map((item) => (
          <SwiperSlide
            style={swiperSlideStyle}
            key={item.crewRecruitmentId}
            onClick={() => onClickCrew(item.crewRecruitmentId)}
          >
            <ImageWrapper>
              <img
                src={
                  item.image?.length !== 0 && item.image?.length !== undefined
                    ? item.image[0]
                    : ''
                }
                alt=''
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default LatestCrewList;
