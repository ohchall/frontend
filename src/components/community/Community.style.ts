import { css, styled } from "styled-components";

const communityPostInherit = css`
  width:100%;
  height:80vh;
  `
 const communityPostDisplay= css`
  width:100%;
  display:flex;
  align-items:center;
  justify-content: space-between;
 `
export const CommunityPosts=styled.div`
  width:100%;
  height:100%;
  overflow-y:auto;
`
export const CommunityPostUpLoad=styled.div`
 ${communityPostInherit}
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
    font-size:40px;
    width:100%;
    text-align:center;
    font-weight:700;
    color: ${props => props.color || '#111111'};
    @media screen and (max-width:500px){
      font-size:40px;
    }
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
  height: 30%;
  border-radius: 10px;
 
`
export const CommunityPostReImg=styled.div`
 width:100%;
 height:70%;
 padding-top:30px;
 
   & >img{
    width:100%;
    height:100%;
    object-fit:cover;
   }
`
export const CommunityPostReContent= styled.div`
  width:100%;
  height:33%;
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
   @media screen and (max-width:500px){
    font-size:13px;
   }
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
 height:30%;
 margin-top:10px;
 @media screen and (max-width:500px) {
  height:40%;
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
    width: 12%;
    background: #baf2ff;
    border-radius: 50%;
    margin-right: 10px;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
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
