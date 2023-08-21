import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { styled } from "styled-components";
// import { SiNaver } from "react-icons/si";
export const SNSlogin = () => {
  KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_APPKEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  return (
    <SNSButtonWrapper>
      {/* <button>
    <SiNaver />
  </button> */}

      <a
        href={process.env.KAKAO_AUTH_URI}
        style={{ backgroundColor: "yellow" }}
      >
        <RiKakaoTalkFill style={{ width: "40px", height: "40px" }} />
      </a>
    </SNSButtonWrapper>
  );
};

const SNSButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
