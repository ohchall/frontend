import React from "react";
import { styled } from "styled-components";

const WheatherReportApi = () => {
  return (
    <Weather>
      <h1>우리 함께 오챌! 참여해봐요!</h1>
      <h3>
        사용자의 운동과 관련된 데이터를 기록하며 동기를 부여해주고, 사용자들
        간에 소통과 협동을 도와주는 서비스입니다.
      </h3>
      <h5>오챌과 함께라면,</h5>
      <ul>
        <li>- 스케줄 관리를 통해 개인 운동 능력을 향상 시킬 수 있어요.</li>
        <li>
          - 커뮤니티를 통한 다함께 오챌 활동으로 운동을 더욱 즐길 수 있는 기회가
          생겨요!
        </li>
      </ul>
      <h5>오챌에는요!</h5>
      <ul>
        <li>- 개인별 스케줄 플래너를 제공하기</li>
        <li>- 크루원 모집 게시글 제공하기</li>
        <li>- 오운완 페이지로 성취감 제공</li>
        <li>- 크루원 모집 게시글 검색</li>
        <li>- 개인 맞춤형 크루원 모집 게시글 자동 추천</li>
        <li>- 팔로우 신청</li>
      </ul>
    </Weather>
  );
};

export default WheatherReportApi;

const Weather = styled.section`
  width: 450px;
  height: 500px;
  padding: 3%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 1000px) {
    display: none;
  }
  & h1 {
    font-size: 40px;
    font-weight: bold;
  }
  & h3 {
    font-size: 20px;
  }
  & h5 {
    font-size: 14px;
  }
  & ul {
  }
  & li {
    font-size: 14px;
  }
`;
