import React, { useEffect, useRef, useState } from "react";
import CrewWriting from "../style/CrewWriting";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { useAddCrewMutation } from "../api/CrewUploadApi";
import ReactDaumPost from 'react-daumpost-hook';
import { useForm } from 'react-hook-form';





function CrewWritePage(props) {
  const [addImg, setAddImg] = useState("");
  // const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState(""); 
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [crewname, setCrewname] = useState("");
  const [address, setAddress] = useState("");
  const [searchedAddress, setSearchedAddress] = useState("");
  const { setValue, handleSubmit } = useForm();
  const ref = useRef(null);

  const addCrewMutation = useAddCrewMutation();
  const [crew, setCrew] = useState({
    title: "",
    content: "",
    crewname:"",
    category: "",
    image:"",
    date: "",
    address:"",
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

 //카테고리가 선택되었을 때 해당 값 axios로 보내는 작업
  // when a category is selected
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

 //카테고리 중 직접입력이 선택되었을 때 
  useEffect(() => {
    if (category === "1") {
      setCrew({
        ...crew,
        category: customCategory,
      });
    }
  }, [customCategory]);





 
  const onCrewUpload = (e) => {
    alert("크루가 등록되었습니다.")
    e.preventDefault();
    console.log(crew)
    addCrewMutation.mutate(crew, {
      onSuccess: (data) => {
        console.log("저장 성공:", data);
        setCrew({
          title: "",
          content: "",
          date: "",
          crewname:"",
          category: "",
          address:"",
          image:{}
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
      [name]: value
    });
  }
  const selectCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
    if (value !== "custom") {
      setCustomCategory(""); // Reset customCategory if other option is selected
    }
  }
   
 

  const postConfig = {
    onComplete: (data) => {
      setCrew({
        ...crew,
        address: data.address,
      });
      setSearchedAddress(data.address);
      // ref.current.style.display = 'none';
    },
  };
  
  const postCode = ReactDaumPost(postConfig);




  return (
    <CrewWriting>
      <CrewUpload>
        <form className="crewForm" onSubmit={onCrewUpload}>
            <div className="crewImage">
                <strong>Image File</strong>
                <div className='button'>
                    {!addImg && (
                      <label className='inputFileBtn' htmlFor='inputFile'>
                        컴퓨터에서 선택
                      </label>
                    )}
                    <input
                      type='file'
                      id='inputFile'
                      accept='image/jpeg,image/jpg,image/png'
                      onChange={upLoadImgHandler}
                    />
                </div>
                {addImg && (
                    <div className='imageUploadSize' value={crew.image}>
                      <img src={addImg} alt='' />
                    </div>
                )}
             </div>
             <div className="title">
              <strong>Title</strong>
              <input type="text" name="title" value={crew.title} placeholder="제목을 입력하세요" onChange={handleInputChange}/>
            </div>
            <div className="content">
              <strong>Content</strong>
              <input type="text" name="content" value={crew.content} placeholder="내용을 입력하세요"onChange={handleInputChange} />
            </div>
            <div className="crewname">
              <strong>Crewname</strong>
              <input type="text" name="crewname" value={crew.crewname} placeholder="크루이름을 입력하세요"onChange={handleInputChange} />
            </div>
            <div className="date">
              <strong>크루 모임날짜</strong>
              <input type="date" name="date" value={crew.date} placeholder="모집날짜를 입력하세요"onChange={handleInputChange}/>
            </div>
            <div className="category" value={crew.category}>
              <strong>카테고리 선택</strong>
              <select name="exerciseCategory" id=""onChange={selectCategory}>
                <option value="">선택해주세요</option>
                <option value="custom">직접입력</option>
                <option>러닝</option>
                <option>자전거</option>
                <option>웨이트</option>
                <option>요가</option>
                <option>산책</option>
                <option>복싱</option>
                <option>필라테스</option>
              </select>
              {category === "custom" && (<input type="text" value={customCategory}placeholder="원하는 카테고리를 입력해주세요" onChange={(e) => setCustomCategory(e.target.value)} />)}
            </div>
            <div className="location">
              <strong>모일 장소</strong>
              <div className="address">
              <input 
                type='text' 
                onClick={postCode} 
                placeholder="주소검색창입니다." 
                ref={ref} 
                name="address"
                value={crew.address} 
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                name="detailAddress"
                onChange={handleInputChange}
                placeholder="상세주소를 입력해 주세요." 
              />  
              {/* <input type='text' onClick={postCode} placeholder="주소검색창입니다." ref={ref} value={searchedAddress} onChange={handleInputChange}/>
              <input type="text" name="address" value={searchedAddress} onChange={handleInputChange}placholder="주소가 입력됩니다."/>
              <input type="text" name="address" onChange={handleInputChange}placholder="상세주소를 입력해 주세요."/>   */}
              </div>
            </div>
            <div className="button">
              <button type="submit">Send</button>
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
