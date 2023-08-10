import { useEffect, useRef, useState } from "react";
import CrewWriting from "../components/crewpost/CrewWriting";

import styled from "styled-components";
import { useAddCrewMutation } from "../api/CrewApi";
import ReactDaumPost from 'react-daumpost-hook';

import CrewDate from "../components/crewpost/CrewDate";
import { AiOutlineCamera } from "react-icons/ai";
import {RxTriangleDown, RxTriangleUp} from "react-icons/rx";
import CrewCategory from "../components/crewpost/CrewCategory";






function CrewWritePage() {
  const [addImg, setAddImg] = useState("");
  const [exercisekind, setExercisekind] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  
  const [searchedAddress, setSearchedAddress] = useState("");
  const ref = useRef(null);
  const [dateRange, setDateRange] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [memberCount, setMemberCount] = useState(0);
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectAll, setSelectAll] = useState("")
  const addCrewMutation = useAddCrewMutation();
  const [crew, setCrew] = useState({
    title: "",
    content: "",
    crewname:"",
    exercisekind: "",
    image:"",
    location:"",
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
    setCrew((prevCrew) => {
      if (exercisekind === "custom") {
        return {
          ...prevCrew,
          exercisekind: customCategory,
        };
      } else {
        return {
          ...prevCrew,
          exercisekind,
        };
      }
    });
  }, [exercisekind, customCategory]);






 
  const onCrewUpload = (e) => {
    e.preventDefault();
    const crewToUpload = {
      ...crew,
      days: selectedDays.join("")
    };
    
    console.log(crewToUpload)
    addCrewMutation.mutate(crewToUpload, {
      onSuccess: (data) => {
        console.log("저장 성공:", data);
        setCrew({
          title: "",
          content: "",
          crewname:"",
          exercisekind: "",
          location:"", 
          image:"",
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
  setCrew((prevCrew) => {
    return {
      ...prevCrew,
      location: `${searchedAddress}`,
    };
  });
}, [searchedAddress]);
 
  const postConfig = {
    onComplete: (data) => {
      setSearchedAddress(data.address);
    },
  };
  
  const postCode = ReactDaumPost(postConfig);

 
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
    const dayHandler=(day)=>{
      if(selectedDays.includes(day)){
        setSelectedDays(prevDays => prevDays.filter(d => d !== day));
      } else{
        setSelectedDays(prevDays => [...prevDays, day]);
      }
    }
    const everydayHandler=(e)=>{
      if (e.target.checked) {
        setSelectedDays(days);
        setSelectAll(true);
      } else {
        setSelectedDays([]);
        setSelectAll(false);
      }
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
                  <div className='imageUploadSize'>
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
                    {days.map((day, index) => (
                      <div 
                      className={`day ${selectedDays.includes(day) ? 'selected' : ''}`} 
                      key={index} 
                      onClick={() => dayHandler(day)}
                      >
                      <p>{day}</p>
                      </div>
                      ))}
                  </div>
                  <div className="everyday">
                    <input 
                      type="checkbox" 
                      checked={selectAll}
                      onChange={everydayHandler}
                    />
                    <p>매일</p>
                  </div>
                </div>

                <div className="location identicalStyle">
                  <strong>장소</strong>
                  <div className="address">
                  <input 
                    type='text' 
                    onClick={postCode} 
                    placeholder="주소검색을 눌러주세요." 
                    ref={ref} 
                    name="location"
                    value={crew.location} 
                    onChange={handleInputChange}
                  />
                  </div>
                </div>
                <CrewCategory category={exercisekind}
                  customCategory={customCategory}
                  onSelectCategory={setExercisekind}
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
