import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFetchCrew } from '../../api/CrewApi';
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
 .crewPostUpload{width:100%;height:60%;padding:2%;position:relative;}
 .crewPostUpload>h3{font-size:20px;margin-bottom:5px;}
 .crewPostUpload>.crewPostButton{
  background-color:#666666;
  color:#ffffff;
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  height:12%;
  cursor:pointer;
 }
 .crewPostUpload>.crewPostButton>p{font-size:14px;font-weight:300;}
 .crewPostUpload>.crewPostButton>button{ background: transparent; border: none; color: #ffffff;
    font-size: 14px; height: auto; width: 10%;cursor:pointer;}
 .crewPostUpload>.crewPostRecents{width:100%;height:82%;display:flex;flex-wrap:wrap;justify-content:space-between;}
 .crewPostRecents>.crewPostRecent{width:49%;height:90%;background-color:#d9d9d9;border:1px solid #eeeeee;border-radius:20px; margin: 5px 2px;}
 .crewPostRecent>.crewPostReImg{width:100%;height:65%;border-radius:10px;overflow:hidden;background-color:#eeeeee;}
  .crewPostRecent>.crewPostReImg>img{width:100%;height:100%;object-fit:cover;}
  .crewPostRecent>.crewPostReContent{width:100%;height:35%;;border-radius:10px;overflow:hidden;padding:2%;}
  .crewPostRecent>.crewPostReContent>.CrewPostTitle{ width: 100%; height: 15%; display: flex;
    align-items: center; justify-content: space-between; padding: 10px 10px;}
  
    .crewPostReContent>.crewPostInfo{display:flex;justify-content:flex-start;padding:5px 10px;}
    .crewPostInfo>.category{width: ${({ length }) => (length * 10)}px;}
    .crewPostInfo>.location{width:50%;margin-left:5px;}
  .crewPostRecent>.crewPostReContent>.crewPersonMax{display:flex;align-items:center;}
  .crewPostRecent>.crewPostReContent>.crewPersonMax>.crewPerson{display:flex;padding:0 10px;}
  .crewPersonMax>.crewPerson>.maxPeople{display:flex;align-items:center;}
  .moreButton{position:absolute;width:100%;height:8%;border:1px solid #eeeeee;border-radius:20px;display:flex;align-items:center;justify-content:center;cursor:pointer;}
  .moreButton>p{font-size:16px;font-weight:500;color:#333333;}
`;
