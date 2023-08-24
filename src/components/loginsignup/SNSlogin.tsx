import axios from "axios";
import { useCallback, useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

// import { SiNaver } from "react-icons/si";
interface SNSLoginProps {}

const SNSlogin: React.FC<SNSLoginProps> = () => {
<<<<<<< HEAD
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_REST_APPKEY = process.env.REACT_APP_KAKAO_REST_APPKEY;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_APPKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
=======
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_AUTH_URI = `${process.env.REACT_APP_KAKAO_AUTH_URI}?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
>>>>>>> a7b8d1c8ce37b8612608b8753e245fbe2bb01e6a

  return (
    <SNSButtonWrapper>
      {/* <button>
    <SiNaver />
  </button> */}

      <a
        href={KAKAO_AUTH_URI}
        // onClick={kakao}
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        <RiKakaoTalkFill style={{ width: "40px", height: "40px" }} />
      </a>
    </SNSButtonWrapper>
  );
};

export default SNSlogin;
const SNSButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
