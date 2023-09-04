import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const Buttons = styled.button`
  width: 95%;
  height: 50px;
  background-color: #ef902a;
  margin-top: 5px;
  border: none;
  margin-left: 2.3%;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
`;
export const LoginSignupInputsContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  & input {
    padding: 15px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-left: 2.3%;
    width: 95%;
    height: 45px;
  }
`;

export const SNSLoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 5%;
  & span {
    margin-top: 20px;
    font-size: 14px;
  }
  & button {
    width: 50px;
    height: 50px;
    border-radius: 40px;
    border: none;
    background-color: darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
export const Nav = styled(Link)`
  text-decoration-line: none;
  color: gray;
  font-size: 14px;
  font-weight: bold;
`;
export const Etc = styled.div`
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  & button {
    cursor: pointer;
    font-size: 12px;
    border: none;
    background-color: none;
  }
`;
