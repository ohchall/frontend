import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

export const CrewBlock = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 16px;

  & input {
    display: block;
    width: calc(100% - 50px);
    height: 50px;
    padding-left: 16px;
    border: 1px solid #666666;
    border-radius: 25px 0 0 25px;
    border-right: none;
  }

  & button {
    display: block;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #666666;
    border-radius: 0 25px 25px 0;
    border-left: none;
    cursor: pointer;
  }

  & button > svg {
    font-size: 20px;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  padding: 0 16px;

  & button {
    height: 34px;
    margin: 0 8px 8px 0;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    cursor: pointer;
  }
`;

export const CrewListContainer = styled.div`
  width: 100%;
  padding: 24px 16px;
`;

export const CrewListTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const CrewList = styled.div`
  display: flex;
  overflow: auto;

  & > div {
    margin-right: 12px;
    cursor: pointer;
  }
`;

export const CrewListSwiper = styled(Swiper)`
  width: 100%;
`;

export const CrewListSwiperSlide = styled(SwiperSlide)`
  width: 285px;
  height: 329px;
  cursor: pointer;
`;

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

export const PopularCrewList = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 8px;
    padding: 0 12px;
    background-color: #EAEAEA;
    border-radius: 15px;
    cursor: pointer;
  }

  & > div > ${TitleContainer} > p:first-child {
    width: 30px;
    margin-right: 10px;
    text-align: center;
    border-radius: 50%;
    background-color: #F3F3F3;
  }

  & > div > ${TitleContainer} > p {
    height: 30px;
    line-height: 30px;
    display: inline-block;
    font-size: 18px;
  }
`;

export const R9dCrewListSwiper = styled(Swiper)`
  width: 100%;
`;

export const R9dCrewListSwiperSlide = styled(SwiperSlide)`
  width: 343px;
  height: 232px;
  cursor: pointer;

  & ${ImageWrapper} {
    width: 343px;
    height: 160px;
  }

  & ${Overview} {
    width: 343px;
    height: 72px;
  }
`;

export const RecommendedCrewList = styled.div`
  display: flex;
  overflow: auto;

  & > div {
    margin-right: 12px;
    cursor: pointer;
  }

  & > div > ${ImageWrapper} {
    width: 343px;
  }

  & > div > ${Overview} {
    width: 343px;
  }
`;