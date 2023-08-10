import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 259px;
  border-radius: 25px 25px 0 0;
  background-color: #EEEEEE;
`;

export const Overview = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 16px;
  border-radius: 0 0 25px 25px;
  background-color: #D9D9D9;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  & > p {
    font-size: 13px;
  }

  & > div > span > svg {
    font-size: 20px;
  }
`;

export const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;

export const LatestCrewListSwiper = styled(Swiper)`
  width: 100%;
`;

export const LatestCrewListSwiperSlide = styled(SwiperSlide)`
  width: 285px;
  height: 329px;
  cursor: pointer;
`;
