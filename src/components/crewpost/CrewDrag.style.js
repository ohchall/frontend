import { css, styled } from "styled-components";

const flexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CrewImage =styled.div`
 width: 100%;
  height: 35%;
  ${flexStyles}
  background-color:#eeeeee;
  border-radius: 10px;
  /* margin-bottom:15%; */
  @media screen and (max-width:500px){
    height:20%;
    margin-bottom: 10px;
  }
  &>.button {
    height: 100%;
    &>.inputFileBtn {
      ${flexStyles}
      color:#999999;
      border-radius: 4px;
      cursor: pointer;
      font-size:13px;
      font-family:"Roboto", sans-serif;
      height:100%;
    }
    &>.inputFileBtn>svg {
      font-size:2rem;
      color:#000000;
      margin-bottom:10px; 
    }
    
    &>input {
      display:none;
    }
  }
`
const CrewFormStyles= css`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  `
export const CrewImageUpLoad = styled.div`
  ${CrewFormStyles}
  flex-direction: row;
  flex-wrap: wrap;
  border-radius:10px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > img:nth-child(1) {
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0;
  }

  & > img:nth-child(2) {
    width: 50%;
    height:50%;
    border-radius: 0 0 0 10px;
  }
  & > img:nth-child(3) {
    width: 50%;
    height:50%;
    border-radius: 0 0 10px 0;
  }
`;