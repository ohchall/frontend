import React,{ useCallback, useEffect, useRef, useState, FormEvent }from 'react'
import { useCommunityMutation } from '../../api/mock/CrewApi';
import ReactDaumPost from 'react-daumpost-hook';
import imageCompression from 'browser-image-compression';
import { useNavigate } from 'react-router-dom';
import { CrewButtons, CrewContent, CrewDates, CrewFormContents, CrewForms, CrewLocation, CrewName, CrewTimes, CrewTitle, CrewTotalMembers,CrewImage, CrewImageUpLoad  } from "./CommunityForm.style"
import CrewDate from '../crewpost/CrewDate';
import CrewTime from '../crewpost/CrewTime';
import CrewCategory from '../crewpost/CrewCategory';
import { AiOutlineCamera } from "react-icons/ai";



const CommunityForm= () => {
  const [addImg, setAddImg] = useState([]);
  const [exerciseKind, setExerciseKind] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [searchedAddress, setSearchedAddress] = useState("");
  const ref = useRef(null);
  const textareaRef = useRef(null);
  const [exerciseDate, setExerciseDate] = useState(new Date());
  const [totalNumber, setTotalNumber] = useState(0);
  const communityMutation = useCommunityMutation();
  const navigate = useNavigate();


const [crew, setCrew] = useState({
    title: "",
    content: "",
    crewName: "",
    location: "",
    usersLocation: "",
    nickname:"",
    exerciseDate: new Date().toISOString(),
    exerciseKind: "",
    totalNumber: 0,
    image: [],
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
  
  

    const dateOnly = crew.exerciseDate.split("T")[0];
    communityMutation.mutate(crew,{
      onSuccess:(data)=>{
        setCrew({
          title: "",
          content: "",
          crewName: "",
          exerciseKind: "",
          location: "",
          usersLocation: "",
          exerciseDate: dateOnly,
          nickname:"",
          totalNumber: 0,
          image: [],
          time: "",
        });
        alert("전송을 성공하였습니다.")
      },
      onError: (error) => {
        console.error("저장 실패:", error);
      },
    })
  //   const contents = {
  //     title: crew.title,
  //     content: crew.content,
  //     crewName: crew.crewName,
  //     exerciseKind: crew.exerciseKind,
  //     location: crew.location,
  //     usersLocation: "",
  //     exerciseDate: dateOnly,
  //     totalNumber: crew.totalNumber,
  //     time: crew.time,
  //   };
  //   const jsonContent = JSON.stringify(contents);
  //   const blob = new Blob([jsonContent], { type: "application/json" });
  //     alert("성공적으로 데이터를 전송하였습니다.");
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
    }// ...
  };
  useEffect(() => {
    setCrew((prevCrew) => {
      return {
        ...prevCrew,
        location: `${searchedAddress}`,
      };
    });
  }, [searchedAddress]);

 
    const upLoadImgHandler = async(e) => {
      const files = e.target.files;
      if (!files || files.length === 0) {
          console.error("No files provided");
          return;
      }
      const file = files[0];
  
      const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1000,
          useWebWorker: true,
      };
  
      try {
          const compressedFile = await imageCompression(file, options);
          const reader = new FileReader();
          reader.onloadend = () => {
              const url = reader.result
  
              setAddImg(prevURLs => [...prevURLs, url]);
              setCrew(prevCrew => {
                  const newImage = {...prevCrew.image};
                  return {
                      ...prevCrew,
                      image: newImage
                  };
              });
          };
          reader.readAsDataURL(compressedFile);
      } catch (error) {
          console.error("Error during image processing:", error);
      }
  };
  const deletion = (index) => {
    const updatedImages = [...addImg];
    updatedImages.splice(index, 1);
    setAddImg(updatedImages);
  };


  return (
    
    <CrewForms onSubmit={onCrewUpload}>
      <CrewImage>
        {addImg.length === 0 ? (
          <div className="button">
            <label className="inputFileBtn" htmlFor="inputFile">
                <AiOutlineCamera />
                크루 대표 이미지를 등록해주세요
            </label>
            <input
                type="file"
                id="inputFile"
                accept="image/*"
                onChange={upLoadImgHandler}
            />
         </div>
         ) : (
          <CrewImageUpLoad>
          <div>
            {addImg.map((image,index) => (
              <div className="imageWrapper">
                <img
                  src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                />
                <div className="close">
                  <button onClick={() => deletion(index)}>X</button>
                </div>
              </div>
            ))}
          </div>
        </CrewImageUpLoad>
    )}
    </CrewImage>


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
            rows={1} 
            name="content"
            value={crew.content}
            placeholder="내용을 입력하세요"
            onChange={handleInputChange}
          />
        </CrewContent>

        <CrewTotalMembers className="nickname identicalStyle">
          <strong>작성자</strong>
          <div className="username">
            <input
              type="text"
              name="nickname"
              placeholder="닉네임을 입력하세요"
              value={crew.nickname}
              onChange={handleInputChange}
            />
          </div>
        </CrewTotalMembers>
        <CrewButtons className="button">
          <button type="submit" className="submit">
            등록하기
          </button>
        </CrewButtons>
      </CrewFormContents>
    </CrewForms>
  )
}

export default CommunityForm