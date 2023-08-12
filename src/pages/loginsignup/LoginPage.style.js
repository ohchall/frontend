import { styled } from "styled-components";

export const LoginPageBlock = styled.div`
  & h1 {
    margin: 3%;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const SNSButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const SNSLoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 10%;

  & button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: darkgray;
  }
`;

export const Etc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & button {
    border: none;
    background-color: none;
  }
`;
