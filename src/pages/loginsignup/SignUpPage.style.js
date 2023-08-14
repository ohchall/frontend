import { styled } from "styled-components";

export const AgreementBox = styled.div`
  padding: 3% 1% 3% 1%;
  border: 1px solid gray;
  border-radius: 5px;
  margin-left: 2.3%;
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  & div {
    font-size: 14px;
    display: flex;
    gap: 3px;
    width: 80%;
    align-items: center;
    justify-content: center;
  }
  & button {
    font-size: 16px;
    border: none;
    background-color: white;
    text-decoration: underline;
  }
`;
export const SignUpPageBlock = styled.main`
  height: 100%;
  overflow: scroll;
  padding-top: 5px;
  padding-bottom: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
  & h1 {
    margin: 3%;
    font-size: 18px;
    font-weight: bold;
  }
`;
export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;

  & h3 {
    font-weight: bolder;
    margin-top: 2%;
    padding-left: 3%;
  }
  & span {
    padding-left: 3%;
    color: grey;
    font-size: 14px;
  }
`;

export const LoginWrapper = styled.div`
  margin-top: 30px;
  gap: 10px;
  margin-left: 20%;
  display: flex;
  align-items: center;
`;
