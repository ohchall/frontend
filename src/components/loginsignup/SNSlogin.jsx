import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { styled } from "styled-components";
// import { SiNaver } from "react-icons/si";
export const SNSlogin = () => {
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_REST_APPKEY = process.env.REACT_APP_KAKAO_REST_APPKEY;
  const KAKAO_AUTH_URI = `${process.env.REACT_APP_KAKAO_AUTH_URI}?client_id=${KAKAO_REST_APPKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <SNSButtonWrapper>
      {/* <button>
    <SiNaver />
  </button> */}

      <a href={KAKAO_AUTH_URI} style={{ backgroundColor: "yellow" }}>
        <RiKakaoTalkFill style={{ width: "40px", height: "40px" }} />
      </a>
    </SNSButtonWrapper>
  );
};

const SNSButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
