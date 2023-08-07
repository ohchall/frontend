import React, { useEffect, useRef, useState } from "react";
import CrewWriting from "../components/crewpost/CrewWriting";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { useAddCrewMutation } from "../api/CrewUploadApi";
import ReactDaumPost from 'react-daumpost-hook';

import CrewDate from "../components/crewpost/CrewDate";
import { AiOutlineCamera } from "react-icons/ai";
import {RxTriangleDown, RxTriangleUp} from "react-icons/rx";
import CrewCategory from "../components/crewpost/CrewCategory";






function CrewWritePage() {
  const [addImg, setAddImg] = useState("");
  // const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [searchedAddress, setSearchedAddress] = useState("");
  const ref = useRef(null);
  const [dateRange, setDateRange] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [memberCount, setMemberCount] = useState(0);
  const addCrewMutation = useAddCrewMutation();
  const [crew, setCrew] = useState({
    title: "",
    content: "",
    crewname:"",
    category: "",
    image:"",
    address:"",
    dateRange:"",
    memberCount:0
  });




  const upLoadImgHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setAddImg(imageDataUrl);
      setCrew({
        ...crew,
        image: file,
      });
    };
    reader.readAsDataURL(file);
  };


  useEffect(() => {
    if (category === "custom") {
      setCrew({
        ...crew,
        category: customCategory,
      });
    } else {
      setCrew({
        ...crew,
        category,
      });
    }
  }, [category, customCategory]);






 
  const onCrewUpload = (e) => {
    e.preventDefault();
    const crewToUpload = {
      ...crew,
      address: `${crew.address}`,
    };
    console.log(crewToUpload)
    addCrewMutation.mutate(crewToUpload, {
      onSuccess: (data) => {
        console.log("저장 성공:", data);
        setCrew({
          title: "",
          content: "",
          crewname:"",
          category: "",
          address:"",
          image:{},
          dateRange:"",
          memberCount:0
        });
      },
      onError: (error) => {
        console.error("저장 실패:", error);
      },
    });
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // address and detailAddress are kept separately in crew state
    setCrew({
      ...crew,
      [name]: value,
    });
}


   

  useEffect(() => {
    setCrew({
      ...crew,
      address: `${searchedAddress}`,
    });
  }, [searchedAddress]);
 
 
  const postConfig = {
    onComplete: (data) => {
      setSearchedAddress(data.address);
    },
  };
  
  const postCode = ReactDaumPost(postConfig);

  const [group, setGroup] = useState(0);
  const [members, setMembers] = useState(0);

 
  const handleMembersChange = (e) => {
    const newCount = Number(e.target.value);
    setMemberCount(newCount);
    setCrew({ ...crew, memberCount: newCount });
  };
  
  const increaseMembers = () => {
    if (memberCount < 100) {
      const newCount = memberCount + 1;
      setMemberCount(newCount);
      setCrew({ ...crew, memberCount: newCount });
    }
  };
  
  const decreaseMembers = () => {
    if (memberCount > 0) {
      const newCount = memberCount - 1;
      setMemberCount(newCount);
      setCrew({ ...crew, memberCount: newCount });
    }
  };

    const setDateRanges=(value)=>{
      setDateRange(value);
      setCrew({ ...crew, dateRange: value })
    }
  return (
    <CrewWriting>
      <CrewUpload>
        <form className="crewForm" onSubmit={onCrewUpload}>
            <div className="crewImage">   
            {!addImg ? (
                  <div className='button'>
                    <label className='inputFileBtn' htmlFor='inputFile'>
                      <AiOutlineCamera   />
                      크루 대표 이미지를 등록해주세요
                    </label>
                    <input
                      type='file'
                      id='inputFile'
                      accept='image/webp, image/png, image/jpeg'
                      onChange={upLoadImgHandler}
                    />
                  </div>
                ) : (
                  <div className='imageUploadSize' value={crew.image}>
                    <img src={addImg} alt='' />
                  </div>
            )}
             </div>
             <div className="crewFormContent">
                <div className="title identicalStyle">
                  <input type="text" name="title" value={crew.title} placeholder="제목" onChange={handleInputChange}/>
                </div>
                <div className="content identicalStyle">
                  <strong>내용</strong>
                  <input type="text" name="content" value={crew.content} placeholder="내용을 입력하세요"onChange={handleInputChange} />
                </div>
                <div className="crewname identicalStyle">
                  <strong>크루명</strong>
                  <input type="text" name="crewname" value={crew.crewname} placeholder="크루이름을 입력하세요"onChange={handleInputChange} />
                </div>
                <div className="date identicalStyle">
                  <strong>기간</strong>
                  <CrewDate setStartDate={setStartDate} setEndDate={setEndDate} setDateRange={setDateRanges} />
                </div>
                <div className="weekends">
                  <strong>요일</strong>
                  <div className="days">
                    <div className="day">일</div>
                    <div className="day">월</div>
                    <div className="day">화</div>
                    <div className="day">수</div>
                    <div className="day">목</div>
                    <div className="day">금</div>
                    <div className="day">토</div>
                  </div>
                </div>
                <div className="location identicalStyle">
                  <strong>장소</strong>
                  <div className="address">
                  <input 
                    type='text' 
                    onClick={postCode} 
                    placeholder="주소검색+상세주소 입력해주세요." 
                    ref={ref} 
                    name="address"
                    value={crew.address} 
                    onChange={handleInputChange}
                  />
                  </div>
                </div>
                <CrewCategory category={category}
                  customCategory={customCategory}
                  onSelectCategory={setCategory}
                  onCustomCategoryChange={setCustomCategory}/>    
          
                <div className="totalmembers identicalStyle">
                  <strong>인원</strong>
                  <div className="numberChoice">
                    <input type="number" className="total" max="100" placeholder="인원수를 선택하세요"  value={crew.memberCount} onChange={handleMembersChange}/>
                    <div className="numberUpDown">
                        <RxTriangleUp onClick={increaseMembers}/>
                        <RxTriangleDown onClick={decreaseMembers}/>
                    </div>
                  </div>
                </div>
                <div className="button">
                    <button type="submit" className="submit">등록하기</button>
                </div>
             </div>   
           
        </form>    
      </CrewUpload>
     </CrewWriting>
    );

  }
export default CrewWritePage;


const CrewUpload = styled.div
`
width:100%;
height:90vh;

`
