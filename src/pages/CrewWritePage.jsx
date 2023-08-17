import { useCallback, useEffect, useRef, useState } from "react";
import CrewWriting from "../components/crewpost/CrewWriting";
import styled from "styled-components";
import { useAddCrewMutation } from "../api/CrewApi";
import ReactDaumPost from "react-daumpost-hook";
import CrewDate from "../components/crewpost/CrewDate";
import { AiOutlineCamera } from "react-icons/ai";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import CrewCategory from "../components/crewpost/CrewCategory";
import CrewTime from "../components/crewpost/CrewTime";
import imageCompression from 'browser-image-compression';

function CrewWritePage() {
  const [addImg, setAddImg] = useState("");
  const [exerciseKind, setExerciseKind] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [searchedAddress, setSearchedAddress] = useState("");
  const ref = useRef(null);
  const [exerciseDate, setExerciseDate] = useState(new Date());
  const [totalNumber, setTotalNumber] = useState(0);
  const { mutate } = useAddCrewMutation();

  const [crew, setCrew] = useState({
    title: "",
    content: "",
    crewName: "",
    location: "",
    exerciseDate: new Date(),
    exerciseKind: "",
    totalNumber: 0,
    image: {},
    time: "",
  });

  // const upLoadImgHandler = async(e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const imageDataUrl = reader.result;
  //     setAddImg(imageDataUrl);
  //     setCrew({
  //       ...crew,
  //       image: file,
  //     });
  //   };
  //   reader.readAsDataURL(file);
  // }
  const upLoadImgHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        const imageDataUrl = reader.result;

        const img = new Image();
        img.src = imageDataUrl;

        img.onload = () => {
            let { width, height } = img;
            if (width > 1000 || height > 1000) {
                if (width > height) {
                    height *= (1000 / width);
                    width = 1000;
                } else {
                    width *= (1000 / height);
                    height = 1000;
                }
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            let quality = 0.9;
            let newDataUrl = canvas.toDataURL(file.type, quality);
            
            let base64DataLength = newDataUrl.length - 'data:image/png;base64,'.length;
            let approxBinaryDataLength = base64DataLength * (3/4) - (base64DataLength / 1024);

            while (approxBinaryDataLength > 1024 * 1024 && quality > 0.1) {
                quality -= 0.8; 
                newDataUrl = canvas.toDataURL(file.type, quality);
                base64DataLength = newDataUrl.length - 'data:image/png;base64,'.length;
                approxBinaryDataLength = base64DataLength * (3/4) - (base64DataLength / 1024);
            }

            setAddImg(newDataUrl);
            setCrew({
                ...crew,
                image: file,
            });
        };
    };

    reader.readAsDataURL(file);
}






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
    formData.append("image", crew.image);
    formData.append("data", blob);
   

    mutate(formData);

    try {
      // console.log(response.data);
    } catch (error) {
      console.error("Error uploading crew data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCrew({
      ...crew,
      [name]: value,
    });
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
    <CrewWriting>
      <CrewUpload>
        <form className="crewForm" onSubmit={onCrewUpload}>
          <div className="crewImage">
            {!addImg ? (
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
              <div className="imageUploadSize">
                <img src={addImg} alt="" />
              </div>
            )}
          </div>

          <div className="crewFormContent">
            <div className="title identicalStyle">
              <input
                type="text"
                name="title"
                value={crew.title}
                placeholder="제목"
                maxLength="7"
                onChange={handleInputChange}
              />
            </div>
            <div className="content identicalStyle">
              <strong>내용</strong>
              <input
                type="text"
                name="content"
                value={crew.content}
                placeholder="내용을 입력하세요"
                onChange={handleInputChange}
              />
            </div>
            <div className="crewname identicalStyle">
              <strong>크루명</strong>
              <input
                type="text"
                name="crewName"
                value={crew.crewName}
                placeholder="크루이름을 입력하세요"
                onChange={handleInputChange}
              />
            </div>
            <div className="date identicalStyle">
              <strong>일정</strong>
              <CrewDate setStartDate={setExerciseDates} />
            </div>
            <div className="time">
              <strong>시간</strong>
              <CrewTime setCrewTime={setCrewTime} />
            </div>

            <div className="location identicalStyle">
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
            </div>
            <CrewCategory
              category={exerciseKind}
              customCategory={customCategory}
              onSelectCategory={setExerciseKind}
              onCustomCategoryChange={setCustomCategory}
            />

            <div className="totalmembers identicalStyle">
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
            </div>
            <div className="button">
              <button type="submit" className="submit">
                등록하기
              </button>
            </div>
          </div>
        </form>
      </CrewUpload>
    </CrewWriting>
  );
}
export default CrewWritePage;

const CrewUpload = styled.div`
  width: 100%;
  height: 90vh;
`;
