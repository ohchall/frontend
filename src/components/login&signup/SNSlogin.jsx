import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { styled } from "styled-components";
// import { SiNaver } from "react-icons/si";
// import axios from "axios";
export const SNSlogin = () => {
  //  const kakaoLogin= async()=>{
  //     await axios
  //       .post(``, user)
  //       .then((response) => {
  //         return console.log("response", response);
  //       })
  //       .catch((error) => {
  //         console.log("an error occurred:", error.response);
  //         alert(error.response.data.msg);
  //       });
  //  }
  return (
    <SNSButtonWrapper>
      {/* <button>
    <SiNaver />
  </button> */}
      <button style={{ backgroundColor: "yellow" }}>
        <RiKakaoTalkFill
          // onClick={kakaoLogin}
          style={{ width: "40px", height: "40px" }}
        />
      </button>
    </SNSButtonWrapper>
  );
};

const SNSButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
