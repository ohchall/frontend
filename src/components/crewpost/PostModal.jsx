import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useFetchCrew, useFetchCrewByPage } from '../../api/CrewApi';
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';



const PostModal = () => {
  const { data, isLoading, isError, refetch } = useFetchCrew();
  
  const getCityAndDistrictFromAddress = (location) => {
    const parts = location.split(' ');
    if(parts.length >= 2) {
        return `${parts[0]} ${parts[1]}`;
    }
    return '';
  }
  const navigate=useNavigate("")
  const Move=()=>{
    navigate("/crew/write")}

  // console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }



 
  return (
    <PostModals>
    <section className="crewPostUpload">
       <h3>크루 모집 포스팅</h3>
        <div className="crewPostButton"onClick={Move}>
          <p>크루를 모집 해보세요</p>
          <button onClick={Move}><AiOutlineRight/></button>
        </div>
        <div className="crewPostRecents">
          {data.map((post)=>(
          <div className="crewPostRecent" key={post.id || post.title}>
              <div className="crewPostReImg">
                <img src={post.image} alt="" />
              </div>
              <div className="crewPostReContent">
                <div className="CrewPostTitle">
                  <p>{post.title}</p>
                  <div className="crewPostLike">
                    <AiFillHeart/>
                  </div>            
                </div>
                <div className="crewPostInfo">
                    <div className="category" length={post.exercisekind.length}>{post.exercisekind}</div>
                    <div>/</div>
                    <div className="location">{getCityAndDistrictFromAddress(post.location)}</div>
                  </div>
                  <div className="crewPersonMax">
                    <div className="crewPerson">
                        <BsPerson/>
                        <div className="maxPeople">
                          <p>현재인원수</p>
                          <p>/</p>
                          <p>{post.memberCount}</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          ))}
        </div> 
     </section>
   </PostModals>
  )
  
}

export default PostModal

const PostModals = styled.div`
 width:100%;
 height:80%;
 margin-bottom:200px;
 position:relative;
 .crewPostUpload{width:100%; height:100%;padding: 5px 15px;
 @media screen and (max-width:500px){
  padding: 5px 38px;
 }}
 .crewPostUpload>h3{font-size:20px;margin-bottom:5px;padding:2%;font-weight:600;}
 .crewPostUpload>.crewPostButton{
  background-color:#666666;
  color:#ffffff;
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  height: 10%;
  cursor: pointer;
  padding:0 10px;
  border-radius: 10px;
 
 }
 .crewPostUpload>.crewPostButton>p{font-size:14px;font-weight:300;}
 .crewPostUpload>.crewPostButton>button{ background: transparent; border: none; color: #ffffff;
    font-size: 14px; height: auto; width: 10%;cursor:pointer;}
 .crewPostUpload>.crewPostRecents{width:100%;height:40%;display:flex;flex-wrap:wrap;justify-content:center;}
 .crewPostRecents>.crewPostRecent{width:43%;height:100%;background-color:#d9d9d9;border:1px solid #eeeeee;border-radius:20px; margin: 7px 7px;}
 .crewPostRecent>.crewPostReImg{width:100%;height:65%;border-radius:20px;overflow:hidden;background-color:#eeeeee;}
  .crewPostRecent>.crewPostReImg>img{width:100%;height:100%;object-fit:cover;}
  .crewPostRecent>.crewPostReContent{width:100%;height:35%;;border-radius:10px;overflow:hidden;font-size:15px;@media screen and (max-width:500px){font-size:15px;}}
  .crewPostRecent>.crewPostReContent>.CrewPostTitle{ width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 6px 7px;}
  
    .crewPostReContent>.crewPostInfo{display:flex;justify-content:flex-start;width:100%;padding:6px 7px;
    @media screen and (max-width:500px){
      padding:5px 5px;
    }
   }
    .crewPostInfo>.category{ white-space: nowrap; 
    flex-shrink: 0; }
    .crewPostInfo>.location{white-space: nowrap; 
    flex-grow: 1;}
  .crewPostRecent>.crewPostReContent>.crewPersonMax{width:100%;display:flex;align-items:center;padding:5px 0;}
  .crewPostRecent>.crewPostReContent>.crewPersonMax>.crewPerson{width:100%;display:flex;padding:0 10px;}
  .crewPersonMax>.crewPerson>.maxPeople{width:100%;display:flex;align-items:center;}
  .crewPostRecents>.moreButton{    
    width: 100%;
    height: 12%;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 15px;
    padding: 6px 7px;}
  .moreButton>p{font-size:16px;font-weight:500;color:#333333;}
`;
