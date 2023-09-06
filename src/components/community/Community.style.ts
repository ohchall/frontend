import { css, styled } from "styled-components";

const communityPostInherit = css`
    width: 100%;
    height: 30vh;
    padding: 5px 0;
  `
 const communityPostDisplay= css`
  width:100%;
  display:flex;
  align-items:center;
  justify-content: space-between;
 `
export const CommunityPosts=styled.div`
  width:100%;
  overflow-y:auto;
`
export const CommunityPostUpLoad=styled.div`
 width:100%;
 padding: 5px 0;
 &>.loader{position:absolute;top:95%;}
 
  & > .communityPostButton{
   background-color: ${props => props.color || '#ef902a'};
   ${communityPostDisplay};
   width:15%;
   height:7%;
   cursor:pointer;
   border-radius:50%;
   margin-left:auto;
   right: 20px;
   position: absolute;
   top: 83%;
   @media screen and (max-width:500px){
    width: 12%;
    right: 10px;
    line-height: 1rem;
    height: 6%;
   }
  }
  & > div > p{
    font-size:20px;
    width:100%;
    text-align:center;
    font-weight:500;
    color: ${props => props.color || '#111111'};
  }
`
const communityPostConSame=css`
 width:100%;
 display:flex;
`
export const CommunityPostsRecents=styled.div`
 ${communityPostConSame}
 height:100%;
 justify-content:center;
 flex-wrap:wrap;
 & > div:nth-child(odd){margin-right:5px;}
 & > .loader{top:100%;position:absolute;}
`
export const CommunityPostRecent=styled.div`
  width: calc(50% - 5px);
  height: 85%;
  border-radius: 10px;
  margin-top:22px;
`
export const CommunityPostReImg=styled.div`
 width:100%;
 height:150px;
 
   & >img{
    width:100%;
    height:100%;
    object-fit:cover;
   }
`
export const CommunityPostReContent= styled.div`
  width:100%;
  height:30%;
  @media screen and (max-width:500px) {
    font-size:12px;
  }
 & > .crewPostTitle{
   ${communityPostDisplay};
   height:70%;
   font-size:14px;
   font-weight:600;
   line-height:1.2rem;
   padding-top:10px;
   overflow:hidden;
   @media screen and (max-width:500px){
    font-size:13px;
   }
   &>p{width:100%;}
  }

`
const communityPersonDisplay=css`
width:100%;
display:flex;
align-items:center;
`

export const CommunityPersonMax=styled.div`
 ${communityPersonDisplay};
 padding:0;
 height:30px;
 margin-top:10px;
 @media screen and (max-width:500px) {
  height:23px;
  margin-top:10px;
 }
 & > div{
  display:flex;
  padding:0;
  align-items:center;
  justify-content:center;
  height:100%;
  width:100%;
 }
 & > div> .nickProfile{
    width: 15%;
    background: #baf2ff;
    border-radius: 50%;
    margin-right: 10px;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    @media screen and (max-width:500px) {
      width:10%;
    }
    &>p{
      font-size:14px;
      font-weight:500;
    @media screen and (max-width:500px){
      font-size:13px;
    }
    }
 }
 & > div>.nickId{
  width:88%;
  height:auto;
  font-size:14px;
  @media screen and (max-width:500px){
   font-size:13px;
  }
  }
`
export const CommunityPostButton=styled.div`
  ${communityPersonDisplay}
  justify-content:center;
  height: 35px;
  border: 1px solid #6e6e6e;
  background-color:#ffffff;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 0;
  margin: 17px 0;
  & > p {
    font-size: 16px;
    font-weight: 500;
    color: #3c3c3c;
    margin-left:4px;
  }
  @media screen and (max-width:500px){
  height: 35px;
  }
  `