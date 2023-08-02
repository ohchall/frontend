import React, { useState } from "react";
import CrewWriting from "../style/CrewWriting";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/layout/Header";
import DatePicker from "../components/DatePicker";
import { useCrewPostData } from '../hook/customHook';
import { set } from "date-fns";


function CrewWritePage() {
  const [addImg, setAddImg] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState(""); 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [crewname, setCrewname] = useState("");
  const [ date, setDate ] = useState("");

  const upLoadImgHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setAddImg(imageDataUrl);
      setImage(file);
    };
    reader.readAsDataURL(file);
  };

  const onCrewUpload = (e) => {
    alert("크루가 등록되었습니다.")
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const contents = {
      content,
      title,
      crewname,
      image,
      date,
      category: category === "1" ? customCategory : category,
    }; 
    console.log(contents)
    formData.append('post', new Blob([JSON.stringify(contents)], { type: 'application/json' }));
    console.log(formData)
    const response = axios.post("http://localhost:4000/crew", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response)
    const data = response.data;
    console.log(data);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'content':
        setContent(value);
        break;
      case 'crewname':
        setCrewname(value);
        break;
      default:
        break;
    }
  }
  return (
    <CrewWriting>
      <Header />
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
                    <div className='imageUploadSize'>
                      <img src={addImg} alt='' />
                    </div>
                )}
             </div>
             <div className="title">
              <strong>Title</strong>
              <input type="text" name="title" value={title} placeholder="제목을 입력하세요" onChange={handleInputChange}/>
            </div>
            <div className="content">
              <strong>Content</strong>
              <input type="text" name="content" value={content} placeholder="내용을 입력하세요"onChange={handleInputChange} />
            </div>
            <div className="crewname">
              <strong>Crewname</strong>
              <input type="text" name="crewname" value={crewname} placeholder="크루이름을 입력하세요"onChange={handleInputChange} />
            </div>
            <div className="date">
              <strong>크루 모임날짜</strong>
              <DatePicker onChange={(selectedDate) => setDate(selectedDate)} />
            </div>
            <div className="category" value={category}>
              <strong>카테고리 선택</strong>
              <select name="exerciseCategory" id=""onChange={(e) => setCategory(e.target.value)}>
                <option value="">선택해주세요</option>
                <option value="1">직접입력</option>
                <option value="2">러닝</option>
                <option value="3">자전거</option>
                <option value="4">웨이트</option>
                <option value="5">요가</option>
                <option value="6">산책</option>
                <option value="7">복싱</option>
                <option value="8">필라테스</option>
              </select>
              {category === "1" && (<input type="text" value={customCategory}placeholder="원하는 카테고리를 입력해주세요" onChange={(e) => setCustomCategory(e.target.value)} />)}
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
