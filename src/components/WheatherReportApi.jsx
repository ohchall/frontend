import React from "react";
import { styled } from "styled-components";

const WheatherReportApi = () => {
  return <Weather></Weather>;
};

export default WheatherReportApi;

const Weather = styled.section`
  width: 500px;
  height: 500px;
  background-color: green;
  border-radius: 30px;
  margin-top: 30%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
