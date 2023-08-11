import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const Buttons = styled.button`
  width: 95%;
  height: 40px;
  background-color: darkgray;
  margin-top: 5px;
  border: none;
`;
export const LoginSignupInputsContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  & input {
    width: 95%;
    height: 35px;
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
  margin: 5%;

  & button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: darkgray;
  }
`;
export const Nav = styled(Link)``;
