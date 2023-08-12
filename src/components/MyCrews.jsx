import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io'
import  styled  from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MyCrews = () => {

  
  const fetchCrews = async ({pageParam = 1, size = 2}) => {
    const { data } = await axios.get(`${process.env.REACT_APP_MOCK_SERVER_URL}/crew?page=${pageParam}&size=${size}`);
    return data;
    
  };
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["crewData"], fetchCrews, {
    getNextPageParam: (lastPage, pages) => {
      // 다음 페이지 로직
      return lastPage.nextPage ? lastPage.currentPage + 1 : undefined;
    },
  });
  const observerRef = useRef(null);
  useEffect(() => {
    if (!observerRef.current && hasNextPage) {
      const observer = new IntersectionObserver(
        entries => {
          const firstEntry = entries[0];
          if (firstEntry.isIntersecting) {
            fetchNextPage();
          }
        },
        { threshold: 1 }
      );

      observer.observe(observerRef.current);
      return () => observer.disconnect();
    }
  }, [hasNextPage, fetchNextPage]);
  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  console.log(data)


  const addressSubstraction = (location) => {
    const parts = location.split(" ");
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1]}`;
    }
    return '';
  }
  const navigate=useNavigate("")
  const navigationOne=()=>{
    navigate("/crew/write")}
 
// console.log(data)
 
  

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error...</div>;
  // }
  // const displayedData = data.slice(0, viewCount * itemsPerPage);


 
  return (
    <CrewPosts>
      <section className="crewPostUpload">
        <h3>크루 모집 포스팅</h3>
        <div className="crewPostButton" onClick={navigationOne}>
          <p>크루를 모집 해보세요</p>
          <button onClick={navigationOne}>
            <AiOutlineRight />
          </button>
        </div>
        <div className="crewPostRecents">
        {data && data.pages && data.pages.flatMap((page) => page.map((post) =>
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
                  <div className="category">{post.exercisekind}</div>
                  <div>/</div>
                  <div className="location">
                    {addressSubstraction(post.location)}
                  </div>
                </div>
                <div className="crewPersonMax">
                  <div className="crewPerson">
                    <BsPerson />
                    <div className="maxPeople">
                      <p>현재인원수</p>
                      <p>/</p>
                      <p>{post.totalnumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           ))}
          <button className="moreButton" onClick={handleLoadMore} ref={observerRef}>
            <p>more</p>
            <IoIosArrowDown />
          </button>
        </div>
      </section>
    </CrewPosts>
  );
};

export default MyCrews;

const MainColor = styled.div`
  background-color: ${(props) => props.bgColor || "#ef902a"};
`;
const CrewPosts = styled.div`
 width:100%;
 height:70vh;
 margin-bottom:55px;
 .crewPostUpload{width:100%; height:inherit;padding: 5px 15px;
 @media screen and (max-width:500px){
  padding: 5px 38px;
 }}
 .crewPostUpload>h3{font-size:20px;margin-bottom:5px;padding:2%;font-weight:600;}
 .crewPostUpload>.crewPostButton{
  background-color: #ef902a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
  height: 9%;
  cursor: pointer;
  padding: 7px 10px;
  margin-left: 14px;
  border-radius: 10px;
 
 }
 .crewPostUpload>.crewPostButton>p{font-size:14px;font-weight:300;}
 .crewPostUpload>.crewPostButton>button{ background: transparent; border: none; color: #ffffff;
    font-size: 14px; height: auto; width: 10%;cursor:pointer;}
 .crewPostUpload>.crewPostRecents{ width: 100%; height: 71%; display: flex;
    flex-wrap: wrap; justify-content: center;}
 .crewPostRecents>.crewPostRecent{width:43.5%;height:74%;background-color:#d9d9d9;border:1px solid #eeeeee;border-radius:30px; margin: 17px 7px;}
 .crewPostRecent>.crewPostReImg{width:100%;height:60%;border-radius:30px;overflow:hidden;background-color:#eeeeee;}
  .crewPostRecent>.crewPostReImg>img{width:100%;height:100%;object-fit:cover;}
  .crewPostRecent>.crewPostReContent{width:100%;height:35%;;border-radius:30px;overflow:hidden;
    padding-top:10px;@media screen and (max-width:500px){font-size:12px;}}
  .crewPostRecent>.crewPostReContent>.CrewPostTitle{ width: 100%; height: 15%; display: flex; align-items: center; justify-content: space-between; padding: 14px 7px;font-size:16px;}
  
    .crewPostReContent>.crewPostInfo{display:flex;justify-content:flex-start;width:100%;padding:5px 7px;font-size:14px;
    @media screen and (max-width:500px){
      padding:5px 5px;
    }
  }
  .crewPostUpload > h3 {
    font-size: 20px;
    margin-bottom: 5px;
    padding: 2%;
    font-weight: 600;
  }
  .crewPostUpload > .crewPostButton {
    background-color: #ef902a;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 92%;
    height: 9%;
    cursor: pointer;
    padding: 7px 10px;
    margin-left: 14px;
    border-radius: 10px;
  }
  .crewPostUpload > .crewPostButton > p {
    font-size: 14px;
    font-weight: 300;
  }
  .crewPostUpload > .crewPostButton > button {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 14px;
    height: auto;
    width: 10%;
    cursor: pointer;
  }
  .crewPostUpload > .crewPostRecents {
    width: 100%;
    height: 71%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
  }
  .crewPostRecents > .crewPostRecent {
    width: 43.5%;
    height: 74%;
    background-color: #d9d9d9;
    border: 1px solid #eeeeee;
    border-radius: 30px;
    margin: 17px 7px;
  }
  .crewPostRecent > .crewPostReImg {
    width: 100%;
    height: 60%;
    border-radius: 30px;
    overflow: hidden;
    background-color: #eeeeee;
  }
  .crewPostRecent > .crewPostReImg > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .crewPostRecent > .crewPostReContent {
    width: 100%;
    height: 35%;
    border-radius: 30px;
    overflow: hidden;
    padding-top: 10px;
    @media screen and (max-width: 500px) {
      font-size: 12px;
    }
  }
  .crewPostRecent > .crewPostReContent > .CrewPostTitle {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 7px;
    font-size: 16px;
  }

  .crewPostReContent > .crewPostInfo {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 5px 7px;
    font-size: 14px;
    @media screen and (max-width: 500px) {
      padding: 5px 5px;
    }
  }
  .crewPostInfo > .category {
    white-space: nowrap;
    flex-shrink: 0;
  }
  .crewPostInfo > .location {
    white-space: nowrap;
    flex-grow: 1;
  }
  .crewPostRecent > .crewPostReContent > .crewPersonMax {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px 0;
  }
  .crewPostRecent > .crewPostReContent > .crewPersonMax > .crewPerson {
    display: flex;
    padding: 0 10px;
  }
  .crewPersonMax > .crewPerson > .maxPeople {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .crewPostRecents > .moreButton {
    width: 90%;
    height: 13%;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px 0;
    margin-bottom:17px}
  .moreButton>p{font-size:16px;font-weight:500;color:#333333;}
`;
