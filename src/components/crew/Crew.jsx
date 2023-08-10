import { useState } from 'react';
import {
  CrewBlock,
  InputContainer,
  CategoryContainer,
  CrewListContainer,
  CrewListTitle,
  CrewListSwiper,
  CrewListSwiperSlide,
  ImageWrapper,
  Overview,
  TitleContainer,
  PopularCrewList,
  R9dCrewListSwiper,
  R9dCrewListSwiperSlide } from './Crew.style';
import { getCrews } from '../../api/CrewApi';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import 'swiper/css';

function Crew() {
  const navigate = useNavigate();
  const categories = [
    '전체', '러닝', '웨이트', '자전거', '요가', '필라테스', '크로스핏', '골프', '테니스'
  ];
  const [keyword, setKeyword] = useState('');

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  }

  const onClickSearch = () => {
    console.log('keyword: ', keyword);
  }

  const onClickCategory = (category) => {
    console.log('category: ', category);
  }

  const onClickCrew = (itemId) => {
    navigate(`/crew/${itemId}`);
  }

  const {
    data,
    isLoading,
    error
  } = useQuery(['crews'], getCrews);

  return (
    <CrewBlock>
      { isLoading && 'Loading...' }
      { error && 'An error has occurred: ' + error.message }
      <InputContainer>
        <input
          type='text'
          value={keyword}
          onChange={onChangeKeyword}
        />
        <button
          onClick={onClickSearch}
        ><FiSearch /></button>
      </InputContainer>

      <CategoryContainer>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onClickCategory(category)}
          >{category}</button>
        ))}
      </CategoryContainer>

      <CrewListContainer>
        <CrewListTitle>
          최신 크루 리스트
        </CrewListTitle>

        <CrewListSwiper
          slidesPerView={'auto'}
          spaceBetween={12}
        >
          {data?.data.map((item) => (
          <CrewListSwiperSlide
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
          </CrewListSwiperSlide>
          ))}
        </CrewListSwiper>
      </CrewListContainer>

      <CrewListContainer>
        <CrewListTitle>
          인기 크루 리스트
        </CrewListTitle>

        <PopularCrewList>
          {data?.data.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onClickCrew(item.id)}
          >
            <TitleContainer>
              <p>{idx+1}</p>
              <p>{item.title}</p>
            </TitleContainer>

            <p>{item.exercisekind} / 서울 중구</p>
          </div>
          ))}
        </PopularCrewList>
      </CrewListContainer>

      <CrewListContainer>
        <CrewListTitle>
          추천 크루 리스트
        </CrewListTitle>

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
      </CrewListContainer>
    </CrewBlock>
  )
}

export default Crew;
