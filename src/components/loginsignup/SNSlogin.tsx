import { RiKakaoTalkFill } from "react-icons/ri";
import { styled } from "styled-components";
// import { SiNaver } from "react-icons/si";
interface SNSLoginProps {}

const SNSlogin: React.FC<SNSLoginProps> = () => {
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_AUTH_URI = `${process.env.REACT_APP_KAKAO_AUTH_URI}?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <SNSButtonWrapper>
      {/* <button>
    <SiNaver />
  </button> */}

      <a
        href={KAKAO_AUTH_URI}
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
