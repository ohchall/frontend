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
    width:100%;
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

& > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
&>div>.single{
  position:relative;
  width:100%;
  height:100%;
  &>img{
   width:100%;
   height:100%;
   object-fit:cover;
   border-radius: 10px 10px 10px 10px;
  }
 
  &:nth-child(2),
  &:nth-child(3){display:none;}
}
&>div>.double{
 position:relative;
 display:flex;
    &:nth-child(1){
      width:50%;
      height:100%;
      object-fit:cover;
      &>img{
        width:100%;
        height: 100%;
        border-radius: 10px 0 0 10px;
      }
    }
    &:nth-child(2){
      width:50%;
      height:100%;
      object-fit:cover;
      &>img{
       border-radius: 0 10px 10px 0;
       width:100%;
       height:100%;
      }
    }
  &:nth-child(3){
    display:none;
  }

}
&>div>.triple{
 position:relative;
    &:nth-child(1){
      width:100%;
      height:50%;
      object-fit:cover;
      &>img{
        width:100%;
        height: 100%;
        border-radius: 10px 10px 0 0;
      }
    }
    &:nth-child(2),
    &:nth-child(3){
      width:50%;
      height:50%;
    }
  &:nth-child(2)>img{
    border-radius: 0 0 0 10px;
    width:100%;
    height:100%;
  }
  &:nth-child(3)>img{
    border-radius: 0 0 10px 0;
    width:100%;
    height:100%;
  }

}


& > div .close {
    position: absolute;
    top: 3px;
    right: 3px;
    display:flex;
    align-items:center;
    justify-content:center;
}

& > div .close > button {
    background: #ffffff;
    color: #111111;
    border:1px solid #ffffff;
    border-radius:50%;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
}
`;

