import { useState } from 'react';
import {
  CrewBlock,
  InputContainer,
  CategoryContainer,
  CrewListContainer,
  CrewListTitle,
  ImageWrapper,
  Overview, 
  CrewList,
  TitleContainer,
  PopularCrew,
  PopularTitleContainer
  } from './Crew.style';
import { getCrews } from '../../api/CrewApi';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

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
        >검색</button>
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

        <CrewList>
          {data?.data.map((item) => (
          <div
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

                <span>하트</span>
              </div>

              <p>{item.exercisekind} / 서울 중구</p>
            </Overview>
          </div>
          ))}
        </CrewList>
      </CrewListContainer>

      <CrewListContainer>
        <CrewListTitle>
          인기 크루 리스트
        </CrewListTitle>

        <PopularCrew>
          {data?.data.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onClickCrew(item.id)}
          >
            <PopularTitleContainer>
              <p>{idx+1}</p>
              <p>{item.title}</p>
            </PopularTitleContainer>

            <p>{item.exercisekind} / 서울 중구</p>
          </div>
          ))}
        </PopularCrew>
      </CrewListContainer>
    </CrewBlock>
  )
}

export default Crew;