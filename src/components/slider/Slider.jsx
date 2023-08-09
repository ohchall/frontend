import React from "react";
import {
  CrewList,
  ImageWrapper,
  Overview,
  TitleContainer,
} from "../crew/Crew.style";
import { useNavigate } from "react-router-dom";
const Slider = ({ data }) => {
  const navigate = useNavigate();
    const onClickCrew = (itemId) => {
      navigate(`/crew/${itemId}`);
    };
  return (
    <CrewList>
      {data?.data.map((item) => (
        <div key={item.id} onClick={() => onClickCrew(item.id)}>
          <ImageWrapper>
            <img src="" alt="" />
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
  );
};

export default Slider;
