import { useCallback, useEffect, useRef, useState } from "react";
import { useAddCrewMutation } from "../../api/CrewApi"
import ReactDaumPost from "react-daumpost-hook";
import CrewTime from "../../components/crewpost/CrewTime";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import CrewDate from "../../components/crewpost/CrewDate";
import CrewCategory from "../../components/crewpost/CrewCategory";
import { useNavigate } from "react-router-dom";
import {CrewButtons, CrewContent, CrewDates, CrewForm, CrewFormContents, CrewLocation, CrewName, CrewTimes, CrewTitle, CrewTotalMembers, CrewWriteBlock} from "./CrewWritePage.style"
import CrewDrag from "../../components/crewpost/CrewDrag";

function CrewWritePage() {
  const [addImg,setAddImg] = useState([]);
  const [exerciseKind, setExerciseKind] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [searchedAddress, setSearchedAddress] = useState("");
  const ref = useRef(null);
  const textareaRef = useRef(null);
  const [exerciseDate, setExerciseDate] = useState(new Date());
  const [totalNumber, setTotalNumber] = useState(0);
  const { mutate } = useAddCrewMutation();
  const navigate= useNavigate();

  //crew 초기값 세팅
  const [crew, setCrew] = useState({
    title: "",
    content: "",
    crewName: "",
    location: "",
    usersLocation: "",
    exerciseDate: new Date().toISOString(),
    exerciseKind: "",
    totalNumber: 0,
    images: [],
    time: "",
  });

  




  useEffect(() => {
    setCrew((prevCrew) => {
      if (exerciseKind === "custom") {
        return {
          ...prevCrew,
          exerciseKind: customCategory,
        };
      } else {
        return {
          ...prevCrew,
          exerciseKind,
        };
      }
    });
  }, [exerciseKind, customCategory]);

  const onCrewUpload = async (e) => {
    e.preventDefault();
  
    if (!crew.title || !crew.content || !crew.crewName || !crew.location || !crew.exerciseKind || crew.totalNumber === 0 || !crew.time) {
      alert("모든 항목을 입력하거나 선택해주세요.");
      return;
    }

    const formData = new FormData();
    const contents = {
      title: crew.title,
      content: crew.content,
      crewName: crew.crewName,
      exerciseKind: crew.exerciseKind,
      location: crew.location,
      usersLocation: "",
      exerciseDate: crew.exerciseDate,
      totalNumber: crew.totalNumber,
      time: crew.time,
    };
    const jsonContent = JSON.stringify(contents);
    const blob = new Blob([jsonContent], { type: "application/json" });
    formData.append("data", blob);
    // formData.append("images", crew.image);
    for (let i = 0; i < crew.images.length; i++) {
      formData.append(`images`, crew.images[i]);
      console.log(crew.images[i]);
      }
     mutate(formData);
      alert("성공적으로 데이터를 전송하였습니다.");
     navigate("/mypage")
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCrew({
      ...crew,
      [name]: value,
    });
    if (name === "content" && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
   }
   if (value) {
    e.target.classList.add('focused');
} else {
    e.target.classList.remove('focused');
}
  };

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

    setCrew({ ...crew, totalNumber: newCount });
  };

  const increaseMembers = () => {
    if (totalNumber < 100) {
      const newCount = totalNumber + 1;
      setTotalNumber(newCount);
      setCrew({ ...crew, totalNumber: newCount });
    }
  };

  const decreaseMembers = () => {
    if (totalNumber > 0) {
      const newCount = totalNumber - 1;
      setTotalNumber(newCount);
      setCrew({ ...crew, totalNumber: newCount });
    }
  };

  const setExerciseDates = (value) => {
    setExerciseDate(value);
    setCrew({ ...crew, exerciseDate });
  };

  const setCrewTime = useCallback((selectedTime) => {
    setCrew((prevCrew) => ({ ...prevCrew, time: selectedTime }));
  }, []);
  

  return (
    <CrewWriteBlock>
        <CrewForm onSubmit={onCrewUpload}>
         <CrewDrag setAddImg={setAddImg} setCrew={setCrew} crew={crew}/>

          <CrewFormContents>
            <CrewTitle className="identicalStyle">
              <input
                type="text"
                name="title"
                value={crew.title}
                placeholder="제목"
                onChange={handleInputChange}
              />
            </CrewTitle>
            <CrewContent className="identicalStyle">
              <strong>내용</strong>
              <textarea
                ref={textareaRef}
                rows="1" 
                type="text"
                name="content"
                value={crew.content}
                placeholder="내용을 입력하세요"
                onChange={handleInputChange}
                style={{ overflow: "hidden", resize: "none",border:"none" }}
              />
            </CrewContent>
            <CrewName className="identicalStyle">
              <strong>크루명</strong>
              <input
                type="text"
                name="crewName"
                value={crew.crewName}
                placeholder="크루이름을 입력하세요"
                onChange={handleInputChange}
              />
            </CrewName>
            <CrewDates className="identicalStyle">
              <strong>일정</strong>
              <CrewDate setStartDate={setExerciseDates} />
            </CrewDates>
            <CrewTimes className="time identicalStyle">
              <strong>시간</strong>
              <CrewTime setCrewTime={setCrewTime} />
            </CrewTimes>

            <CrewLocation className="identicalStyle">
              <strong>장소</strong>
              <div className="address">
                <input
                  type="text"
                  onClick={postCode}
                  placeholder="주소검색을 눌러주세요."
                  ref={ref}
                  name="location"
                  value={crew.location}
                  onChange={handleInputChange}
                />
              </div>
            </CrewLocation>
            <CrewCategory
              category={exerciseKind}
              customCategory={customCategory}
              onSelectCategory={setExerciseKind}
              onCustomCategoryChange={setCustomCategory}
            />

            <CrewTotalMembers className="totalmembers identicalStyle">
              <strong>인원</strong>
              <div className="numberChoice">
                <input
                  type="number"
                  className="total"
                  max="100"
                  placeholder="인원수를 선택하세요"
                  value={crew.totalNumber}
                  onChange={handleMembersChange}
                />
                <div className="numberUpDown">
                  <RxTriangleUp onClick={increaseMembers} />
                  <RxTriangleDown onClick={decreaseMembers} />
                </div>
              </div>
            </CrewTotalMembers>
            <CrewButtons className="button">
              <button type="submit" className="submit">
                등록하기
              </button>
            </CrewButtons>
          </CrewFormContents>
        </CrewForm>
      </CrewWriteBlock>
  );
}
export default CrewWritePage;

