import React from "react";
import { styled } from "styled-components";

function EventBanner() {
  return (
    <EventBannerSection
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHt9AjD1ePcoXzHCfTF3KgVawMyFS4A3NGA&usqp=CAU)`,
      }}
    >
      <EventLabel>오운완 챌린지 이벤트</EventLabel>
      <EventBannerTitle> 오챌! 우리 함께 운동해요! </EventBannerTitle>
    </EventBannerSection>
  );
}

export default EventBanner;

const EventBannerSection = styled.section`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 100px;
  background-color: grey;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  position: relative;
`;
const EventBannerTitle = styled.h1`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;
const EventLabel = styled.label`
  position: absolute;
  bottom: 40px;
  left: 10px;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 20px;
  width: 130px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;