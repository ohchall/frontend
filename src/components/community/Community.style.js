import { css, styled } from "styled-components";

const crewPostInherit = css`
  width:100%;
  height:inherit;
  `
 const crewPostDisplay= css`
  width:100%;
  display:flex;
  align-items:center;
  justify-content: space-between;
 `
export const CrewPosts=styled.div`
  ${crewPostInherit}
  margin-bottom:120px;
`
export const CrewPostUpLoad=styled.div`
 ${crewPostInherit}
 padding: 5px 0;
 overflow-y:auto;
 @media screen and (max-width: 500px) {
  padding: 5px 38px;}
  & > h3{
   font-size:22px;
   margin-bottom:5px;
   padding:16px 4px 16px 0;
   font-weight:600;
  }
  & > .crewPostButton{
   background-color: ${props => props.color || '#ef902a'};
   ${crewPostDisplay};
   width:16%;
   height:7%;
   cursor:pointer;
   border-radius:50%;
   margin-left:auto;
   right:0;
  }
  & > div > p{
    font-size:15px;
    width:100%;
    text-align:center;
    font-weight:900;
    color: ${props => props.color || '#111111'};
  }
  & > div > button{
   width:10%;
   height:100%;
   cursor:pointer;
   font-size:18px;
   font-weight:900;
   color: ${props => props.color || '#111111'};
   background:transparent;
   border:none;
   display:none;
  }
  & > div > button >svg {
    width:100%;
    height:100%;
  }
`
const crewPostConSame=css`
 width:100%;
 display:flex;
`
export const CrewPostsRecents=styled.div`
 ${crewPostConSame}
 justify-content:center;
 flex-wrap:wrap;
 margin:10px 0;
 & > div:nth-child(odd){margin-right:10px;}
`
export const CrewPostRecent=styled.div`
  width: calc(50% - 5px);
  height: 253px;
  border-radius: 10px;
  margin:5px 0;
 
`
export const CrewPostReImg=styled.div`
 width:100%;
 height:75%;
 border-radius:10px 10px 0 0;
 overflow:hidden;
 background-color:#eeeeee;
   & >img{
    width:100%;
    height:100%;
    object-fit:cover;
   }
`
export const CrewPostReContent= styled.div`
  width:100%;
  height:25%;
  overflow:hidden;
  padding-top:10px;
  @media screen and (max-width:500px) {
    font-size:12px;
  }
 & > .crewPostTitle{
   ${crewPostDisplay};
   height:15%;
   padding:14px 7px;
   font-size:16px;
  }

`
export const CrewPostInfo=styled.div`
 ${crewPostConSame};
   justify-content:flex-start;
   padding: 5px 7px;
   font-size:14px;
   @media screen and (max-width:500px) {
      padding:5px 5px;
    }
    & > .category{
      white-space:nowrap;
      flex-shrink:0;
    }
    & > .location{
      white-space:nowrap;
      flex-grow:1;
    }
`
const crewPersonDisplay=css`
width:100%;
display:flex;
align-items:center;
`

export const CrewPersonMax=styled.div`
 ${crewPersonDisplay};
 padding:5px 0;
 & > div{
  display:flex;
  padding:0 10px;

 }
 & > div> .maxPeople{
  ${crewPersonDisplay};
  font-size:12px;
 }
`
export const CrewPostButton=styled.div`
 ${crewPersonDisplay}
 justify-content:center;
 height: 5%;
 border: 1px solid #6e6e6e;
 background-color:#ffffff;
 border-radius: 10px;
 cursor: pointer;
 padding: 5px 0;
 margin-bottom: 17px;
  & > p{
  font-size: 16px;
  font-weight: 500;
  color: #3c3c3c;
 }
`
