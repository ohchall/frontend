import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFetchCrew } from '../api/CrewUploadApi';
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MyCrews = () => {
  const { data, isLoading, isError, refetch } = useFetchCrew();
  
  const addressSubstraction = (address) => {
    const parts = address.split(' ');
    if(parts.length >= 2) {
        return `${parts[0]} ${parts[1]}`;
    }
    return '';
  }
  const navigate=useNavigate("")
  const navigationOne=()=>{
    navigate("/crew/write")}
  const navigationTwo=()=>{
    navigate("/postmodal")}
  // console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }



 
  return (
    <CrewPosts>
      <section className="crewPostUpload">
        <h3>크루 모집 포스팅</h3>
        <div className="crewPostButton" onClick={navigationOne}>
          <p>크루를 모집 해보세요</p>
          <button onClick={navigationOne}><AiOutlineRight /></button>
        </div>
        <div className="crewPostRecents">
          {data.slice(-2).map((post) => ( // 최근 2개의 데이터만 표시
            <div className="crewPostRecent" key={post.id || post.title}>
              <div className="crewPostReImg">
                <img src={post.image} alt="" />
              </div>
              <div className="crewPostReContent">
                <div className="CrewPostTitle">
                  <p>{post.title}</p>
                  <div className="crewPostLike">
                    <AiFillHeart />
                  </div>
                </div>
                <div className="crewPostInfo">
                  <div className="category" length={post.category.length}>{post.category}</div>
                  <div>/</div>
                  <div className="location">{addressSubstraction(post.address)}</div>
                </div>
                <div className="crewPersonMax">
                  <div className="crewPerson">
                    <BsPerson />
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
        <button className="moreButton" onClick={navigationTwo}>
        <p>more</p>
        <IoIosArrowDown />
      </button>
      </section>

    </CrewPosts>
  );
  
  
}

export default MyCrews

const CrewPosts = styled.div`
 width:100%;
 height:100%;
 margin-bottom:200px;
 .crewPostUpload{width:100%; height:100%;padding:2%;}
 .crewPostUpload>h3{font-size:20px;margin-bottom:5px;}
 .crewPostUpload>.crewPostButton{
  background-color:#666666;
  color:#ffffff;
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  height: 13%;
  cursor: pointer;
  padding: 2%;
  border-radius: 10px;
  margin-top: 10px;
 }
 .crewPostUpload>.crewPostButton>p{font-size:14px;font-weight:300;}
 .crewPostUpload>.crewPostButton>button{ background: transparent; border: none; color: #ffffff;
    font-size: 14px; height: auto; width: 10%;cursor:pointer;}
 .crewPostUpload>.crewPostRecents{width:100%;height:85%;display:flex;flex-wrap:wrap;justify-content:space-between;}
 .crewPostRecents>.crewPostRecent{width:47%;height:100%;background-color:#d9d9d9;border:1px solid #eeeeee;border-radius:20px; margin: 7px 6px;}
 .crewPostRecent>.crewPostReImg{width:100%;height:65%;border-radius:10px;overflow:hidden;background-color:#eeeeee;}
  .crewPostRecent>.crewPostReImg>img{width:100%;height:100%;object-fit:cover;}
  .crewPostRecent>.crewPostReContent{width:100%;height:35%;;border-radius:10px;overflow:hidden;padding:2%;}
  .crewPostRecent>.crewPostReContent>.CrewPostTitle{ width: 100%; height: 15%; display: flex;
    align-items: center; justify-content: space-between; padding: 10px 10px;}
  
    .crewPostReContent>.crewPostInfo{display:flex;justify-content:flex-start;width:100%;padding:5px 10px;}
    .crewPostInfo>.category{width: ${({ length }) => (length * 10)}px;}
    .crewPostInfo>.location{width:53%;margin-left:5px;}
  .crewPostRecent>.crewPostReContent>.crewPersonMax{display:flex;align-items:center;}
  .crewPostRecent>.crewPostReContent>.crewPersonMax>.crewPerson{display:flex;padding:0 10px;}
  .crewPersonMax>.crewPerson>.maxPeople{display:flex;align-items:center;}
  .crewPostUpload>.moreButton{    
    width: 100%;
    height: 12%;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 15px;}
  .moreButton>p{font-size:16px;font-weight:500;color:#333333;}
`;
