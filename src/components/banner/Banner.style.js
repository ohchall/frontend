import styled from "styled-components";

export const BannerSection = styled.div`
  margin-top: -20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 200px;
  background-color: grey;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  position: relative;
`;

export const BannerTitle = styled.h1`
  position: absolute;
  bottom: 25px;
  left: 10px;
  margin: 0;
  font-size: 20px;
`;

export const BannerLabel = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 50px;
  left: 10px;
  text-align: center;
  font-size: 12px;
`;
