import { useEffect, useRef, useState } from "react";
import CrewWriting from "../components/crewpost/CrewWriting";

import styled from "styled-components";
import { useAddCrewMutation } from "../api/CrewApi";
import ReactDaumPost from 'react-daumpost-hook';

import CrewDate from "../components/crewpost/CrewDate";
import { AiOutlineCamera } from "react-icons/ai";
import {RxTriangleDown, RxTriangleUp} from "react-icons/rx";
import CrewCategory from "../components/crewpost/CrewCategory";
import CrewTime from "../components/crewpost/CrewTime";






function CrewWritePage() {
  const [addImg, setAddImg] = useState("");
  const [exercisekind, setExercisekind] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [searchedAddress, setSearchedAddress] = useState("");
  const ref = useRef(null);
  const [exerciseDate, setExerciseDate] = useState(new Date());
  const [totalnumber, setTotalnumber] = useState(0);
  const addCrewMutation = useAddCrewMutation();
  const [crew, setCrew] = useState({
    title: "",
    content: "",
    crewname:"",
    exercisekind: "",
    image:"",
    location:"",
    exercisedate: new Date(),
    time: "오전 06:00", 
    totalnumber:0
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
          exercisedate:"",
          time:"",
          totalnumber:0
        });
      },
      onError: (error) => {
        console.error("저장 실패:", error);
      },
    });
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
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
 
    setCrew({ ...crew, totalnumber: newCount });
  };
  
  const increaseMembers = () => {
    if (totalnumber < 100) {
      const newCount = totalnumber + 1;
      setTotalnumber(newCount);
      setCrew({ ...crew, totalnumber: newCount });
    }
  };
  
  const decreaseMembers = () => {
    if (totalnumber > 0) {
      const newCount = totalnumber - 1;
      setTotalnumber(newCount);
      setCrew({ ...crew, totalnumber: newCount });
    }
  };

   
    const setExerciseDates = (value) => {
      setExerciseDate(value);
      setCrew({ ...crew, exercisedate: value })
    }
    const setCrewTime = (selectedTime) => {
      setCrew(prevCrew => ({ ...prevCrew, time: selectedTime }));
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
                  <input type="text" name="title" value={crew.title} placeholder="제목" maxLength="11" onChange={handleInputChange}/>
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
                  <strong>일정</strong>
                  <CrewDate setStartDate={setExerciseDates}/>
                </div>
                <div className="time">
                  <strong>시간</strong>
                  <CrewTime setCrewTime={setCrewTime}/>
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
                    <input type="number" className="total" max="100" placeholder="인원수를 선택하세요"  value={crew.totalnumber} onChange={handleMembersChange}/>
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
