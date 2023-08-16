import React from "react";
import { styled } from "styled-components";

const Skeleton = () => {
  return (
    <div style={{ width: "95%", height: "160px" }}>
      <div
        style={{
          width: " 100%",
          height: "259px",
          borderRadius: " 25px 25px 0 0",
          backgroundColor: " #EEEEEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      ></div>

      <div
        style={{
          width: "100%",
          height: "70px",
          padding: "14px 16px",
          borderRadius: "0 0 25px 25px",
          backgroundColor: "#F3F3F3",
        }}
      >
        <div>
          <div style={{}}></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
const ImageWrapper = styled.div`
  width: 100%;
  height: 259px;
  border-radius: 25px 25px 0 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

const Overview = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 16px;
  border-radius: 0 0 25px 25px;
  background-color: #f3f3f3;

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

const R9dCrew = styled.div`
  width: 398px;
  height: 232px;
  cursor: pointer;

  &:nth-of-type(-n + 4) {
    margin-bottom: 12px;
  }

  & ${ImageWrapper} {
    height: 160px;
  }

  & ${Overview} {
    height: 72px;
  }
`;

const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;
