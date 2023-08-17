import React, { useCallback, useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import  styled  from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {IoIosArrowDown}from 'react-icons/io';


const MyCrews = () => {
  const observerRef = useRef(null);
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const {data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
    ['crewDatas'],
    ({ pageParam = 1 }) => axios.get(`${process.env.REACT_APP_SERVER_URL}/crew/more`, { 
      params: {
        page: pageParam,
        size: 2,
        sortBy: 'createPostDate',
        isAsc: false,
      },
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }),
      {
        getNextPageParam: (lastPage, totalPage) => {
          // const nextPage = totalPage.length + 1; 
          // return lastPage.data.totalPages !== 0 ? nextPage : undefined;
          return totalPage.last? undefined: totalPage.length + 2  
      }}
  );
  //  console.log("data",data)

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);
  
  useEffect(() => {
    const element = observerRef.current;
    if (!element) {
      return;
    }
    
    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage,handleObserver]);
 



  const addressSubstraction = (location) => {
    const parts = location.split(" ");
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1]}`;
    }
    return '';
  }

  const navigate = useNavigate();

  const navigationOne = () => {
    navigate("/crew/write")
  };

  if (isSuccess && !data) {
    return <div>Loading...</div>;
  };

  if (!isSuccess) {
    return <div>Error...</div>;
  };

  // console.log(data?.pages[0].data.crewList)


  const flattenedCrewList = data?.pages.flatMap(page => page.data.crewList);

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
        {isSuccess && flattenedCrewList.map((crew) => (
          <div className="crewPostRecent" key={crew.crewRecruitmentId}>
            <div className="crewPostReImg">
              <img
                src={
                  crew.image?.length !== 0 && crew.image?.length !== undefined
                  ? crew.image
                  : ""
                }
                alt=""
              />
            </div>
            <div className="crewPostReContent">
              <div className="CrewPostTitle">
                <p>{crew.title}</p>
              </div>
              <div className="crewPostInfo">
                <div className="category">{crew.exerciseKind}</div>
                <div>/</div>
                <div className="location">
                  {addressSubstraction(crew.location)}
                </div>
              </div>
              <div className="crewPersonMax">
                <div className="crewPerson">
                  <BsPerson />
                  <div className="maxPeople">
                    <p>현재인원수</p>
                    <p>/</p>
                    <p>{crew.totalNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      {/* <div className='loader' ref={observerRef}>
      {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
      </div> */}

    <button className="moreButton" onClick={()=>fetchNextPage()}>
      <p>more</p>
      <IoIosArrowDown />
    </button>

    </section>
  </CrewPosts>
  );
};

export default MyCrews;

// const MainColor = styled.div`
//   background-color: ${(props) => props.bgColor || "#ef902a"};
// `;

const CrewPosts = styled.div`
  width:100%;
  height:inherit;
  margin-bottom:120px;
  /* display:flex;
  flex-direction:column; */
  .crewPostUpload {
    width:100%;
    height:inherit;
    padding: 5px 15px;
    overflow-y:auto;
    @media screen and (max-width:500px) {
      padding: 5px 38px;
    }
  }
  .crewPostUpload > h3 {
    font-size:20px;
    margin-bottom:5px;
    padding:2%;
    font-weight:600;
  }
  .crewPostUpload > .crewPostButton{
    background-color: #ef902a;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    cursor: pointer;
    padding: 7px 10px;
    border-radius: 10px;
  }
  .crewPostUpload > .crewPostButton > p {
    font-size:14px;
    font-weight:300;
  }
  .crewPostUpload > .crewPostButton > button {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 14px;
    width: 10%;
    height: auto;
    cursor:pointer;
  }
  .crewPostUpload > .crewPostRecents{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
  }
  .crewPostRecents > .crewPostRecent {
    width: calc(50% - 5px);
    height: 253px;
    background-color: #d9d9d9;
    border: 1px solid  #eeeeee;
    border-radius: 25px;
    margin:5px 0;
  }
  .crewPostRecents > .crewPostRecent:nth-child(odd) {
    margin-right: 10px;
  }
  .crewPostRecent > .crewPostReImg {
    width: 100%;
    height: 152px;
    border-radius: 25px 25px 0 0;
    overflow: hidden;
    background-color:#eeeeee;
  }
  .crewPostRecent > .crewPostReImg > img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .crewPostRecent > .crewPostReContent {
    width:100%;
    height:35%;
    border-radius:30px;
    overflow:hidden;
    padding-top:10px;
    @media screen and (max-width:500px) {
      font-size:12px;
    }
  }
  .crewPostRecent > .crewPostReContent > .CrewPostTitle {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 7px;
    font-size:16px;
  }
  .crewPostReContent > .crewPostInfo {
    display:flex;
    justify-content:flex-start;
    width:100%;
    padding:5px 7px;
    font-size:14px;
    @media screen and (max-width:500px) {
      padding:5px 5px;
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
  .crewPostUpload > .moreButton {
    width: 100%;
    height: 7%;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px 0;
    margin-bottom: 17px}
  .moreButton > p {
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    }
`;
