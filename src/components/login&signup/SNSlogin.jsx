import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { styled } from "styled-components";
// import { SiNaver } from "react-icons/si";
export const SNSlogin = () => {
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_APPKEY}`;
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <SNSButtonWrapper>
      {/* <button>
    <SiNaver />
  </button> */}
      {/* <button style={{ backgroundColor: "yellow" }}> */}{" "}
      <a href={KAKAO_AUTH_URI} style={{ backgroundColor: "yellow" }}>
        <RiKakaoTalkFill
          // onClick={kakaoLogin}
          style={{ width: "40px", height: "40px" }}
        />
      </a>
      {/* </button> */}
    </SNSButtonWrapper>
  );
};

const SNSButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;


 // const kakaoLogin = async () => {
  //   console.log("clicked");
  // await axios
  //   .get(`${process.env.REACT_APP_SERVER_URL}/user/kakao/callback`, {
  //     headers: { withCredentials: true },
  //   })
  //   .then((response) => {
  //     return console.log("response", response);
  //   })
  //   .catch((error) => {
  //     console.log("an error occurred:", error);
  //     alert(error);
  //   });
  // };
  // client_id=3c25ce3be60d236b1624d94bf5c86eb5
  // const kakaoLogin = async () => {
  //   console.log("clicked");
  //   await axios
  //     .get("https://kauth.kakao.com/oauth/authorize", {
  //       header: { withCredentials: true },
  //     })
  //     .then((response) => {
  //       return console.log("response", response);
  //     })
  //     .catch((error) => {
  //       console.log("an error occurred:", error);
  //       alert(error);
  //     });
  // };

  // const SNSlogin = () => {
  //   location =
  //     "https://kauth.kakao.com/oauth/authorize?client_id=3c25ce3be60d236b1624d94bf5c86eb5";
  // };